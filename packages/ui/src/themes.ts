// Single catalogue for theme identity, display order and appearance capabilities.
// Labels remain in each host’s i18n; implementations live in this package.
export const DEFAULT_PRIMARY_COLOR = "#1677ff";
export const UI_THEMES = [
    { id: "default", colorMode: "selectable", iconSet: "material-symbols-rounded" },
    { id: "desk", colorMode: "light", primaryColor: "#172033", iconSet: "antd" },
    { id: "antd", colorMode: "selectable", iconSet: "antd" },
    { id: "bootstrap", colorMode: "light", iconSet: "antd" },
    { id: "geek", colorMode: "dark", primaryColor: "#39ff14", iconSet: "antd" },
    { id: "cartoon", colorMode: "light", primaryColor: "#225555", iconSet: "antd" },
    { id: "glass", colorMode: "light", iconSet: "antd" },
    { id: "shadcn", colorMode: "light", primaryColor: "#262626", iconSet: "antd" },
    { id: "illustration", colorMode: "light", primaryColor: "#52C41A", iconSet: "antd" },
] as const;

export type UiTheme = (typeof UI_THEMES)[number]["id"];
export type UiIconSet = "material-symbols-rounded" | "antd";
export type UiThemeDefinition = { id: UiTheme; colorMode: "selectable" | "light" | "dark"; primaryColor?: string; iconSet: UiIconSet };

export const getUiThemeDefinition = (id?: string | null): UiThemeDefinition =>
    UI_THEMES.find((item) => item.id === id) ?? UI_THEMES[0];

export const supportsDarkMode = (id?: string | null) => getUiThemeDefinition(id).colorMode === "selectable";
export const supportsCustomPrimary = (id?: string | null) => getUiThemeDefinition(id).primaryColor === undefined;
export const getUiThemeOptions = (labels: Record<UiTheme, string>) =>
    UI_THEMES.map(({ id }) => ({ value: id, label: labels[id] }));
