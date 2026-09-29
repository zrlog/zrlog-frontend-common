const { test } = require("node:test");
const assert = require("node:assert/strict");

test("theme catalogue can be read without loading any UI runtime", () => {
    const before = new Set(Object.keys(require.cache));
    const { UI_THEMES, getUiThemeDefinition } = require("@zrlog/ui/themes");
    assert.equal(UI_THEMES.length, 9);
    assert.equal(getUiThemeDefinition("old-unknown-theme").id, "default");
    const loaded = Object.keys(require.cache).filter((path) => !before.has(path));
    assert.ok(loaded.every((path) => path.endsWith("/dist/themes.js")), loaded.join("\n"));
});

test("ESM and CommonJS public entrypoints expose the same theme contract", async () => {
    const esm = await import("@zrlog/ui");
    const cjs = require("@zrlog/ui");
    assert.deepEqual(esm.UI_THEMES, cjs.UI_THEMES);
    const material = await import("@zrlog/ui/material");
    const config = material.createMaterialTheme({ colorPrimary: "#1677ff", dark: true });
    assert.equal(config.componentSize, "medium");
    assert.equal(typeof material.MaterialStyles, "function");
});
