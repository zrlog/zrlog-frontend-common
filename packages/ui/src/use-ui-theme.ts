import { useMemo } from "react";
import type { ConfigProviderProps } from "antd";
import type { UiThemeOptions } from "./types";
import { getUiThemeDefinition } from "./themes";
import { themeAlgorithms } from "./theme-algorithms";
import { createMaterialTheme } from "./material-theme";
import useGlassTheme from "./glassTheme";
import useShadcnTheme from "./shadcnTheme";
import useGeekTheme from "./geekTheme";
import useCartoonTheme from "./cartoonTheme";
import useIllustrationTheme from "./illustrationTheme";
import useBootstrapTheme from "./bootstrapTheme";
import useDeskTheme from "./deskTheme";

export const useUiTheme = ({ theme: name, colorPrimary, dark, compactMode = false }: UiThemeOptions): ConfigProviderProps => {
    const definition = getUiThemeDefinition(name);
    const appearance = useMemo(() => ({
        colorPrimary: definition.primaryColor ?? colorPrimary,
        dark: definition.colorMode === "selectable" ? dark : definition.colorMode === "dark",
        compactMode,
    }), [definition, colorPrimary, dark, compactMode]);
    // Keep hook order stable when changing themes; all branches use the same peers.
    const glass = useGlassTheme(appearance.colorPrimary);
    const shadcn = useShadcnTheme();
    const geek = useGeekTheme();
    const cartoon = useCartoonTheme();
    const illustration = useIllustrationTheme();
    const bootstrap = useBootstrapTheme(appearance);
    const desk = useDeskTheme(appearance);
    const material = useMemo(() => createMaterialTheme(appearance), [appearance]);
    const antd = useMemo(() => ({ theme: {
        algorithm: themeAlgorithms(appearance), token: { colorPrimary: appearance.colorPrimary },
    } }), [appearance]);
    const configs = { default: material, antd, glass, shadcn, geek, cartoon, illustration, bootstrap, desk };
    const config = configs[definition.id];
    return useMemo(() => ({ ...config, componentSize: compactMode ? "small" : "medium" }), [config, compactMode]);
};
