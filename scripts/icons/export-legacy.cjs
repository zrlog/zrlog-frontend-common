// Extract only manifest entries from the installed, pinned Ant Design SVG package.
const fs = require("node:fs");
const path = require("node:path");
const manifest = require("./manifest.json");
const source = require("./source.json");
const custom = require("./custom.json");
const packageJson = require.resolve("@ant-design/icons-svg/package.json");
const root = path.dirname(packageJson);
if (require(packageJson).version !== source.antDesignSvgVersion) {
    throw new Error("Expected @ant-design/icons-svg " + source.antDesignSvgVersion);
}
const glyphs = {};
for (const [name, entry] of Object.entries(manifest)) {
    if (!entry.legacy) { glyphs[name] = custom[name]; continue; }
    glyphs[name] = { regular: require(path.join(root, "lib/asn", entry.legacy + ".js")).default.icon };
    if (entry.legacySelected) glyphs[name].selected = require(path.join(root, "lib/asn", entry.legacySelected + ".js")).default.icon;
}
const output = path.resolve(__dirname, "../../.tmp/icons/legacy.json");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(glyphs, null, 2) + "\n");
console.log(output);
