import { readFile, mkdir, writeFile, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { releaseBase, validatePackages } from "./release-contract.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const json = async (path) => JSON.parse(await readFile(resolve(root, path), "utf8"));
const version = process.argv[2] || (await json("package.json")).version;
const names = ["ui", "utils"];
const packages = Object.fromEntries(await Promise.all(names.map(async (name) => [name, await json(`packages/${name}/package.json`)])));
validatePackages(version, packages);
if ((await json("package.json")).version !== version) throw new Error("Root version must match package versions");
const output = resolve(root, "artifacts", version);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const manifest = { version, source: process.env.GITHUB_SHA || "working-tree", packages: [] };
for (const name of names) {
    const result = JSON.parse(execFileSync("npm", ["pack", "--json", "--ignore-scripts", "--pack-destination", output], {
        cwd: resolve(root, "packages", name), encoding: "utf8",
    }))[0];
    if (!result.files.some(({ path }) => path === "dist/index.js") || !result.files.some(({ path }) => path === "dist/index.d.ts")) {
        throw new Error(`${name}: missing built entry or declarations`);
    }
    for (const { path } of result.files) {
        if (!/^(dist\/.*\.(js|d\.ts)|dist\/esm\/package\.json|themes\.js|material\.js|package\.json|README\.md|LICENSE)$/.test(path)) {
            throw new Error(`${name}: unexpected package content ${path}`);
        }
    }
    const content = await readFile(resolve(output, result.filename));
    manifest.packages.push({
        name: packages[name].name, file: result.filename, bytes: content.length,
        url: `${releaseBase}/${version}/${result.filename}`,
        sha256: createHash("sha256").update(content).digest("hex"),
        integrity: result.integrity,
    });
}
await writeFile(resolve(output, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
await writeFile(resolve(output, "SHA256SUMS"), manifest.packages.map((pkg) => `${pkg.sha256}  ${pkg.file}\n`).join(""));
console.log(JSON.stringify(manifest, null, 2));
