// Single catalogue for theme identity, display order and appearance capabilities.
// Labels remain in each host’s i18n; implementations live in this package.
export const DEFAULT_PRIMARY_COLOR = "#1677ff";
export const UI_THEMES = [
    { id: "default", colorMode: "selectable" },
    { id: "desk", colorMode: "light", primaryColor: "#172033" },
    { id: "antd", colorMode: "selectable" },
    { id: "bootstrap", colorMode: "light" },
    { id: "geek", colorMode: "dark", primaryColor: "#39ff14" },
    { id: "cartoon", colorMode: "light", primaryColor: "#225555" },
    { id: "glass", colorMode: "light" },
    { id: "shadcn", colorMode: "light", primaryColor: "#262626" },
    { id: "illustration", colorMode: "light", primaryColor: "#52C41A" },
] as const;

export type UiTheme = (typeof UI_THEMES)[number]["id"];
export type UiThemeDefinition = { id: UiTheme; colorMode: "selectable" | "light" | "dark"; primaryColor?: string };

export const getUiThemeDefinition = (id: string): UiThemeDefinition =>
    UI_THEMES.find((item) => item.id === id) ?? UI_THEMES[0];

export const supportsDarkMode = (id: string) => getUiThemeDefinition(id).colorMode === "selectable";
export const supportsCustomPrimary = (id: string) => getUiThemeDefinition(id).primaryColor === undefined;
export const getUiThemeOptions = (labels: Record<UiTheme, string>) =>
    UI_THEMES.map(({ id }) => ({ value: id, label: labels[id] }));
