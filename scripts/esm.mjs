import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const directory = resolve(root, process.argv[2]);
async function addExtensions(folder) {
for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = resolve(folder, entry.name);
    if (entry.isDirectory()) { await addExtensions(path); continue; }
    if (!entry.name.endsWith(".js")) continue;
    const source = await readFile(path, "utf8");
    await writeFile(path, source.replace(/(from\s+["'])(\.\.?\/[^"']+)(["'])/g,
        (_, before, specifier, after) => `${before}${specifier.endsWith(".js") ? specifier : `${specifier}.js`}${after}`));
}
}
await addExtensions(directory);
await writeFile(resolve(directory, "package.json"), '{"type":"module"}\n');

// Older CRA/Jest resolvers need physical CJS entries in addition to package exports.
if (directory.endsWith("/packages/ui/dist/esm")) {
    const packageRoot = resolve(directory, "../..");
    for (const entry of ["icons", "feedback"]) {
        await writeFile(resolve(packageRoot, `${entry}.js`), `module.exports = require("./dist/${entry}.js");\n`);
    }
    for (const family of ["icons", "material-icons", "antd"]) {
        await mkdir(resolve(packageRoot, family), { recursive: true });
        for (const file of await readdir(resolve(directory, family))) {
            if (!file.endsWith(".js")) continue;
            await writeFile(resolve(packageRoot, family, file), `module.exports = require("../dist/${family}/${file}");\n`);
        }
    }
}
