import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const directory = resolve(root, process.argv[2]);
for (const name of await readdir(directory)) {
    if (!name.endsWith(".js")) continue;
    const path = resolve(directory, name);
    const source = await readFile(path, "utf8");
    await writeFile(path, source.replace(/(from\s+["'])(\.\.?\/[^"']+)(["'])/g,
        (_, before, specifier, after) => `${before}${specifier.endsWith(".js") ? specifier : `${specifier}.js`}${after}`));
}
await writeFile(resolve(directory, "package.json"), '{"type":"module"}\n');
