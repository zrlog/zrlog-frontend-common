# @zrlog/ui

ZrLog React 应用共用的主题与展示能力，基于 Ant Design 的公开 ConfigProvider、token 与语义槽。

```tsx
import { App, ConfigProvider } from "antd";
import { useUiTheme, ThemeStyles } from "@zrlog/ui";
import { UiIconProvider } from "@zrlog/ui/icons";

function Application({ theme, colorPrimary, dark, compactMode, children }) {
    const config = useUiTheme({ theme, colorPrimary, dark, compactMode });
    return <UiIconProvider theme={theme}><ConfigProvider {...config}>
        <ThemeStyles theme={theme} />
        <App>{children}</App>
    </ConfigProvider></UiIconProvider>;
}
```

- `@zrlog/ui/themes`：不加载 React / Ant Design 的轻量目录入口；`UI_THEMES`、`UiTheme`、`UiThemeDefinition`：九套主题标识、顺序、明暗与主色能力的唯一目录。
- `getUiThemeDefinition(name)`：缺失、`null`、空字符串及未知标识统一回退 default；`useUiTheme` 与 `ThemeStyles` 使用同一规则。`getUiThemeOptions(labels)` 接收宿主文案。
- `supportsDarkMode(name)`、`supportsCustomPrimary(name)`：表单与初始化共用能力查询。
- `useUiTheme(options)`：选择 default M3、Desk、Ant Design、Glass、Shadcn、Geek、Cartoon、Illustration、Bootstrap；固定明暗/主色的主题仍保留自身风格。
- `ThemeAppearance`、`UiThemeOptions`、`ColorMode`：公开外观类型。模式选择、默认值和保存归属宿主。
- `ThemeStyles`：放在相应 ConfigProvider 内，每个应用根挂载一次；随主题切换撤下对应样式。Desk 浮层通过公开 root/popup 类名获得样式，M3 使用自己的语义类。
- `ZrLogMark({size, className, style, label})`：共用 SVG 品牌标识，多实例 ID 隔离；没有 label 时作为装饰图。
- `@zrlog/ui/material`：只使用 M3 的宿主从此导入 `createMaterialTheme(options)`、`MaterialStyles`、`materialColors` 和 `ZrLogMark`，不加载其他主题。
- `materialColors(seed, dark)`：ZrLog 配色角色映射，可用于浏览器 theme-color；不是 Google HCT 动态取色实现。

普通组件继续从 Ant Design 导入；需要组件级图标槽的 Input / InputNumber / Result / Steps /
Popconfirm / Pagination / Table / Image / Tree / DatePicker / Progress / Switch / Tag / Typography 从 `@zrlog/ui/antd/<Component>` 导入，保留宿主正在使用的 Ant Design
props 与公开 ref，只补充随主题切换的图标默认值。适配范围见图标说明，字段保留独立 label。

语义图标逐个导入，例如 `import HomeIcon from "@zrlog/ui/icons/home"`，通过 `selected` 切换填充态。
`@zrlog/ui/material-icons/home` 仅加载 Material 图形，供安装页等固定 M3 的应用使用。
图标不会从包根统一导出或通过全量名称表加载。`UiIconProvider` 根据主题目录选择图标集，
同时挂载动效与减少动态效果样式；宿主的 ConfigProvider 和 App 均放在其下方。
状态消息用 `@zrlog/ui/feedback` 的 `useUiMessage` / `useUiApp`，保留 Ant Design 的调用和返回值契约。
全部接口、资产来源与维护方式见 [图标说明](../../docs/theme-icons.md)。
React 18.3.1、Ant Design 6.4.3 为当前验证版本，二者和 React DOM 通过 peer dependencies 由宿主提供。

后台只在默认主题使用 M3；其他主题保持独立。安装页使用默认 M3，保留自身 light / dark / system 选择与浅色首屏策略。
后台导航、仪表盘、文章列表、编辑器宿主适配、权限、路由和文案不包含在本包。
同时挂载不同主题的多个嵌套 UI 根不是当前版本支持范围。

构建、测试与 npmjs 发布统一使用仓库根的 npm scripts，见 [根 README](../../README.md)。

同时提供 CommonJS（Node / Jest）与 ESM（浏览器 bundler）入口，避免整库 CommonJS 阻止消费者移除未用组件。
