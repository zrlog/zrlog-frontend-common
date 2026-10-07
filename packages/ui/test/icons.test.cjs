const { test } = require("node:test");
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const React = require("react");
const { renderToStaticMarkup: render } = require("react-dom/server");
const { UiIconProvider } = require("../dist/icons");
const manifest = require("../../../scripts/icons/manifest.json");
const { UI_THEMES } = require("../dist/themes");

test("every semantic icon has renderable regular/selected shapes for both families", () => {
    for (const name of Object.keys(manifest)) {
        const Icon = require(`../dist/icons/${name}`).default;
        for (const theme of ["default", "antd"]) {
            for (const selected of [false, true]) {
                const markup = render(React.createElement(UiIconProvider, { theme },
                    React.createElement(Icon, { selected, label: name, size: 24 })));
                assert.match(markup, /<svg[^>]*viewBox="[^"]+"/, `${name}/${theme}/${selected}`);
                assert.match(markup, /<path[^>]*d="[^"]+"/, `${name}/${theme}/${selected}`);
                assert.match(markup, /role="img"/);
                assert.ok(markup.includes(`aria-label="${name}"`));
                assert.equal(markup.includes('data-selected="true"'), selected);
                assert.ok(markup.includes(`data-icon-set="${theme === "default" ? "material-symbols-rounded" : "antd"}"`));
            }
        }
    }
});

test("theme catalogue controls icons; unknown names use the same default as controls", () => {
    const Home = require("../dist/icons/home").default;
    for (const theme of [...UI_THEMES.map(({ id }) => id), undefined, null, "", "unknown"]) {
        const markup = render(React.createElement(UiIconProvider, { theme }, React.createElement(Home)));
        const material = !UI_THEMES.some(({ id }) => id === theme && id !== "default");
        assert.ok(markup.includes(`data-icon-set="${material ? "material-symbols-rounded" : "antd"}"`));
        assert.match(markup, /aria-hidden="true"/);
    }
    const regular = render(React.createElement(Home));
    const selected = render(React.createElement(Home, { selected: true }));
    assert.notEqual(regular.match(/<path d="([^"]+)/)[1], selected.match(/<path d="([^"]+)/)[1]);
});

test("standalone CJS icon entries load only their own glyphs; Material loads no legacy assets", () => {
    for (const family of ["icons", "material-icons"]) {
        const loaded = JSON.parse(execFileSync(process.execPath, ["-e", `
            require('@zrlog/ui/${family}/search');
            process.stdout.write(JSON.stringify(Object.keys(require.cache).filter(p => p.includes('/dist/glyphs/'))));
        `], { cwd: require("node:path").resolve(__dirname, ".."), encoding: "utf8" }));
        assert.equal(loaded.length, family === "icons" ? 2 : 1, loaded.join("\n"));
        assert.ok(loaded.every((path) => path.endsWith("/search.js")));
        if (family === "material-icons") assert.ok(loaded.every((path) => !path.includes("/antd/")));
    }
});

test("ESM per-icon entries are usable and match CommonJS geometry", async () => {
    const esm = await import("@zrlog/ui/icons/search");
    const cjs = require("@zrlog/ui/icons/search");
    assert.deepEqual(esm.icon, cjs.icon);
    assert.equal(render(React.createElement(esm.default)), render(React.createElement(cjs.default)));
});

test("feedback adapters preserve overload arguments, explicit icons and returned close/thenables", () => {
    const { withMessageIcons, withNotificationIcons } = require("../dist/feedback");
    const calls = [];
    const returned = Object.assign(() => {}, { then: () => {} });
    const api = Object.fromEntries(["open", "success", "error", "info", "warning", "loading", "destroy"]
        .map((type) => [type, (...args) => { calls.push([type, ...args]); return returned; }]));
    const icon = React.createElement("span", null, "status");
    const icons = { success: icon, info: icon };
    assert.equal(withMessageIcons(api, {}), api);
    const message = withMessageIcons(api, icons);
    const onClose = () => {};
    assert.equal(message.success("saved", 3, onClose), returned);
    assert.deepEqual(calls.pop(), ["success", { content: "saved", icon }, 3, onClose]);
    const explicit = { content: "saved", icon: null, key: "task" };
    message.success(explicit, onClose);
    assert.deepEqual(calls.pop(), ["success", explicit, onClose]);
    assert.equal(explicit.icon, null);
    message.open({ content: "saved", type: "success", key: 4 });
    assert.deepEqual(calls.pop(), ["open", { content: "saved", type: "success", key: 4, icon }]);
    const notification = withNotificationIcons(api, icons);
    notification.info({ title: "title", description: "details", icon: false });
    assert.deepEqual(calls.pop(), ["info", { title: "title", description: "details", icon: false }]);
    assert.equal(message.destroy, api.destroy);
    let liveIcons = icons;
    const stable = withMessageIcons(api, () => liveIcons);
    stable.success("material");
    assert.equal(calls.pop()[1].icon, icon);
    liveIcons = {};
    stable.success("classic");
    assert.deepEqual(calls.pop(), ["success", "classic"]);
});

test("component icon defaults preserve disabled/loading state and caller overrides", () => {
    const { ConfigProvider } = require("antd");
    const { createMaterialTheme } = require("../dist/material");
    const Switch = require("../dist/antd/Switch").default;
    const Input = require("../dist/antd/Input").default;
    const Steps = require("../dist/antd/Steps").default;
    const Progress = require("../dist/antd/Progress").default;
    const Result = require("../dist/antd/Result").default;
    const content = React.createElement(React.Fragment, null,
        React.createElement(Switch, { loading: true, defaultChecked: true }),
        React.createElement(Input, { allowClear: true, defaultValue: "draft" }),
        React.createElement(Steps, { current: 1, items: [{ title: "First" }, { title: "Next" }] }),
        React.createElement(Progress, { percent: 30, status: "exception" }),
        React.createElement(Result, { status: "error", icon: React.createElement("b", null, "custom") }));
    const markup = render(React.createElement(UiIconProvider, { theme: "default" },
        React.createElement(ConfigProvider, createMaterialTheme({ colorPrimary: "#1677ff", dark: false }), content)));
    assert.match(markup, /aria-checked="true"/);
    assert.match(markup, /aria-busy="true"/);
    assert.match(markup, /disabled=""/);
    assert.match(markup, /zrlog-switch-pending/);
    assert.match(markup, /value="draft"/);
    assert.match(markup, /data-icon="check"/);
    assert.match(markup, /data-icon="error"/);
    assert.match(markup, /<b>custom<\/b>/);
    assert.doesNotMatch(markup, /anticon-loading|anticon-close-circle|anticon-check/);
    const classic = render(React.createElement(UiIconProvider, { theme: "antd" }, content));
    assert.match(classic, /anticon-loading/);
    assert.doesNotMatch(classic, /zrlog-switch-pending"/);
});

test("icon defaults never make ordinary tags or alerts dismissible", () => {
    const { ConfigProvider } = require("antd");
    const { createMaterialTheme } = require("../dist/material");
    const Tag = require("../dist/antd/Tag").default;
    const { Alert } = require("antd");
    const preview = (closable) => render(React.createElement(UiIconProvider, { theme: "default" },
        React.createElement(ConfigProvider, createMaterialTheme({ colorPrimary: "#1677ff", dark: false }),
            React.createElement(Tag, { closable }, "label"), React.createElement(Alert, { closable, title: "status" }))));
    assert.doesNotMatch(preview(undefined), /data-icon="close"|ant-tag-close-icon|ant-alert-close-icon/);
    assert.doesNotMatch(preview(false), /data-icon="close"|ant-tag-close-icon|ant-alert-close-icon/);
    assert.equal((preview(true).match(/data-icon="close"/g) || []).length, 2);
});

test("conditional help, copy, filter and collapse icons retain opt-in behavior", () => {
    const { ConfigProvider, Form, Collapse } = require("antd");
    const { createMaterialTheme } = require("../dist/material");
    const Typography = require("../dist/antd/Typography").default;
    const Table = require("../dist/antd/Table").default;
    const content = React.createElement(React.Fragment, null,
        React.createElement(Form, null,
            React.createElement(Form.Item, { label: "plain" }, React.createElement("input")),
            React.createElement(Form.Item, { label: "help", tooltip: "details" }, React.createElement("input"))),
        React.createElement(Typography.Text, { copyable: true }, "copy text"),
        React.createElement(Collapse, { items: [{ key: "details", label: "details", children: "content" }] }),
        React.createElement(Table, { pagination: false, dataSource: [], columns: [
            { title: "state", dataIndex: "state", filters: [{ text: "ready", value: "ready" }] },
        ] }));
    const markup = render(React.createElement(UiIconProvider, { theme: "default" },
        React.createElement(ConfigProvider, createMaterialTheme({ colorPrimary: "#1677ff", dark: false }), content)));
    assert.equal((markup.match(/data-icon="help"/g) || []).length, 1);
    for (const name of ["copy", "filter", "chevron-right"]) assert.ok(markup.includes(`data-icon="${name}"`));
    assert.doesNotMatch(markup, /anticon-copy|anticon-filter|anticon-question-circle|anticon-right/);
    const disabled = render(React.createElement(Typography.Text, { copyable: false }, "plain"));
    assert.doesNotMatch(disabled, /data-icon="copy"/);
    const custom = render(React.createElement(Typography.Text, { copyable: { icon: React.createElement("b", null, "custom") } }, "text"));
    assert.match(custom, /<b>custom<\/b>/);
});
