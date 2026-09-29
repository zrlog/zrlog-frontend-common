# @zrlog/ui

ZrLog React 应用共用的主题与展示能力，基于 Ant Design 的公开 ConfigProvider、token 与语义槽。

```tsx
import { App, ConfigProvider } from "antd";
import { useUiTheme, ThemeStyles } from "@zrlog/ui";

function Application({ theme, colorPrimary, dark, compactMode, children }) {
    const config = useUiTheme({ theme, colorPrimary, dark, compactMode });
    return <ConfigProvider {...config}>
        <ThemeStyles theme={theme} />
        <App>{children}</App>
    </ConfigProvider>;
}
```

- `@zrlog/ui/themes`：不加载 React / Ant Design 的轻量目录入口；`UI_THEMES`、`UiTheme`、`UiThemeDefinition`：九套主题标识、顺序、明暗与主色能力的唯一目录。
- `getUiThemeDefinition(name)`：未知标识兼容回退 default；`getUiThemeOptions(labels)` 接收宿主文案。
- `supportsDarkMode(name)`、`supportsCustomPrimary(name)`：表单与初始化共用能力查询。
- `useUiTheme(options)`：选择 default M3、Desk、Ant Design、Glass、Shadcn、Geek、Cartoon、Illustration、Bootstrap；固定明暗/主色的主题仍保留自身风格。
- `ThemeAppearance`、`UiThemeOptions`、`ColorMode`：公开外观类型。模式选择、默认值和保存归属宿主。
- `ThemeStyles`：放在相应 ConfigProvider 内，每个应用根挂载一次；随主题切换撤下对应样式。Desk 浮层通过公开 root/popup 类名获得样式，M3 使用自己的语义类。
- `ZrLogMark({size, className, style, label})`：共用 SVG 品牌标识，多实例 ID 隔离；没有 label 时作为装饰图。
- `@zrlog/ui/material`：只使用 M3 的宿主从此导入 `createMaterialTheme(options)`、`MaterialStyles`、`materialColors` 和 `ZrLogMark`，不加载其他主题。
- `materialColors(seed, dark)`：ZrLog 配色角色映射，可用于浏览器 theme-color；不是 Google HCT 动态取色实现。

组件继续从 Ant Design 导入。本包不包装另一套 Button / Input API，字段保留独立 label。
React 18.3.1、Ant Design 6.4.3 为当前验证版本，二者和 React DOM 通过 peer dependencies 由宿主提供。

后台只在默认主题使用 M3；其他主题保持独立。安装页使用默认 M3，保留自身 light / dark / system 选择与浅色首屏策略。
后台导航、仪表盘、文章列表、编辑器宿主适配、权限、路由和文案不包含在本包。
同时挂载不同主题的多个嵌套 UI 根不是当前版本支持范围。

构建、测试与 CDN 发布统一使用仓库根的 npm scripts，见 [根 README](../../README.md)。

同时提供 CommonJS（Node / Jest）与 ESM（浏览器 bundler）入口，避免整库 CommonJS 阻止消费者移除未用组件。
