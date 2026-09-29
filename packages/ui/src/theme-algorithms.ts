import { theme } from "antd";
import type { ThemeAppearance } from "./types";

export const themeAlgorithms = ({ dark, compactMode }: ThemeAppearance) => [
    dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    ...(compactMode ? [theme.compactAlgorithm] : []),
];
