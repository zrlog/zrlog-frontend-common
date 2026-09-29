const { test } = require("node:test");
const assert = require("node:assert/strict");
const { FastColor } = require("@ant-design/fast-color");
const { materialColors } = require("../dist");

const contrast = (a, b) => {
    const values = [a, b].map((color) => new FastColor(color).getLuminance()).sort((x, y) => y - x);
    return (values[0] + 0.05) / (values[1] + 0.05);
};

for (const dark of [false, true]) {
    test(`neutral seed stays neutral (dark=${dark})`, () => {
        for (const role of Object.values(materialColors("#808080", dark))) {
            const { r, g, b } = new FastColor(role);
            assert.equal(r, g);
            assert.equal(g, b);
        }
    });
    for (const seed of ["#d32f2f", "#00875a", "#6750a4"]) {
        test(`tonal roles retain configured hue ${seed} (dark=${dark})`, () => {
            const hue = new FastColor(seed).getHue();
            const colors = materialColors(seed, dark);
            for (const role of [colors.primaryContainer, colors.onPrimaryContainer]) {
                const difference = Math.abs(new FastColor(role).getHue() - hue);
                assert.ok(Math.min(difference, 360 - difference) < 5);
            }
        });
    }
    for (const seed of ["#1677ff", "#ffffff", "#000000", "#ffff00", "#00ff00", "#f00", "#6750a4", "#ff00ff"]) {
        test(`configured brand ${seed} keeps foregrounds readable (dark=${dark})`, () => {
            const c = materialColors(seed, dark);
            for (const [fg, bg] of [
                [c.onPrimary, c.primary], [c.onPrimary, c.primaryHover], [c.onPrimary, c.primaryActive],
                [c.onPrimaryContainer, c.primaryContainer], [c.onSurface, c.surface], [c.onSurface, c.container],
                [c.onSurfaceVariant, c.containerHigh], [c.primary, c.container],
                [c.primary, c.primaryContainer], [c.primary, c.containerHighest],
            ]) assert.ok(contrast(fg, bg) >= 4.5, `${fg} on ${bg}`);
            assert.ok(contrast(c.outline, c.container) >= 3);
        });
    }
}
