export type ThemeAppearance = {
    colorPrimary: string;
    dark: boolean;
    compactMode?: boolean;
};

export type UiThemeOptions = ThemeAppearance & {
    theme: string;
};
export type ColorMode = "light" | "dark" | "system";
