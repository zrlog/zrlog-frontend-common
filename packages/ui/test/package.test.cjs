const { test } = require("node:test");
const assert = require("node:assert/strict");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { App, ConfigProvider, Spin, Switch, theme } = require("antd");
const { createMaterialTheme, MaterialStyles, UI_THEMES, useUiTheme, ThemeStyles, ZrLogMark } = require("../dist");

test("package renders without a browser or admin state and does not change other providers", () => {
    const config = createMaterialTheme({ colorPrimary: "#00875a", dark: true });
    const markup = renderToStaticMarkup(React.createElement(ConfigProvider, config,
        React.createElement(MaterialStyles), React.createElement(Spin, { percent: 42 })));
    assert.match(markup, /zrlog-material-spin/);
    assert.match(markup, /aria-valuenow="42"/);
    assert.doesNotMatch(markup, /admin-material-shell/);
    const plain = renderToStaticMarkup(React.createElement(ConfigProvider, null, React.createElement(Spin)));
    assert.doesNotMatch(plain, /zrlog-material-spin/);
    assert.match(plain, /ant-spin-dot-item/);
});

test("all catalogue themes render through the public API without inheriting Material controls", () => {
    const Preview = ({ name }) => React.createElement(ConfigProvider,
        useUiTheme({ theme: name, colorPrimary: "#00875a", dark: false }),
        React.createElement(ThemeStyles, { theme: name }),
        React.createElement(App, null, React.createElement(Spin), React.createElement(Switch)));
    for (const { id } of UI_THEMES) {
        const markup = renderToStaticMarkup(React.createElement(Preview, { name: id }));
        assert.equal(markup.includes('class="zrlog-material-spin'), id === "default", id);
        assert.equal(markup.includes("zrlog-m3-switch"), id === "default", id);
        assert.equal(markup.includes("data-zrlog-desk-style"), id === "desk", id);
        assert.doesNotMatch(markup, /body\.light|sidebar-shell|article-desk-list/);
    }
});

test("multiple brand marks have isolated SVG references and optional accessible labels", () => {
    const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
        React.createElement(ZrLogMark), React.createElement(ZrLogMark, { label: "ZrLog" })));
    const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(ids.length, 4);
    assert.equal(new Set(ids).size, 4);
    assert.match(markup, /aria-hidden="true"/);
    assert.match(markup, /role="img" aria-label="ZrLog"/);
});

test("missing, null, empty and unknown theme values render the complete default theme", () => {
    const Preview = ({ name }) => React.createElement(ConfigProvider,
        useUiTheme({ theme: name, colorPrimary: "#1677ff", dark: false }),
        React.createElement(ThemeStyles, { theme: name }), React.createElement(Spin), React.createElement(Switch));
    for (const name of [undefined, null, "", "unknown-theme"]) {
        const markup = renderToStaticMarkup(React.createElement(Preview, { name }));
        assert.match(markup, /class="zrlog-material-spin/);
        assert.match(markup, /data-zrlog-material-controls/);
        assert.match(markup, /zrlog-m3-switch/);
        assert.doesNotMatch(markup, /data-zrlog-desk-style/);
    }
});

test("custom color and density produce real Ant Design tokens", () => {
    for (const dark of [false, true]) {
        const normal = createMaterialTheme({ colorPrimary: "#00875a", dark });
        const compact = createMaterialTheme({ colorPrimary: "#00875a", dark, compactMode: true });
        const blue = createMaterialTheme({ colorPrimary: "#1677ff", dark });
        assert.notEqual(theme.getDesignToken(normal.theme).colorPrimary, theme.getDesignToken(blue.theme).colorPrimary);
        assert.equal(normal.componentSize, "medium");
        assert.equal(compact.componentSize, "small");
        assert.ok(theme.getDesignToken(compact.theme).padding < theme.getDesignToken(normal.theme).padding);
    }
});
