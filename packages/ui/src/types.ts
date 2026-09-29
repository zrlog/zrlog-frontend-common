export type ThemeAppearance = {
    colorPrimary: string;
    dark: boolean;
    compactMode?: boolean;
};

export type UiThemeOptions = ThemeAppearance & {
    theme?: string | null;
};
export type ColorMode = "light" | "dark" | "system";
