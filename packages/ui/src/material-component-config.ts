import type { CSSProperties } from "react";
import type { ConfigProviderProps } from "antd";
import type { materialColors } from "./material-colors";
import { materialIconConfig } from "./material-icon-config";

// Public semantic slots keep Material presentation inside the selected theme,
// including portals. Component-level props/styles retain their normal precedence.
export const materialComponentConfig = (c: ReturnType<typeof materialColors>, brand: string): ConfigProviderProps => ({
    ...materialIconConfig,
    inputSearch: {
        ...materialIconConfig.inputSearch,
        classNames: { root: "zrlog-m3-search" },
    },
    input: {
        classNames: ({ props }) => ({ root: props.type === "search" ? "zrlog-m3-search-field" : "" }),
    },
    switch: {
        classNames: ({ props }) => ({
            root: `zrlog-m3-switch${props.size === "small" ? " zrlog-m3-switch-small" : ""}`,
            indicator: "zrlog-m3-switch-handle",
            content: "zrlog-m3-switch-content",
        }),
        styles: { root: { "--zrlog-m3-on-primary": c.onPrimary } as CSSProperties },
    },
    checkbox: {
        classNames: ({ props }) => ({
            root: `zrlog-m3-checkbox${props.indeterminate ? " zrlog-m3-checkbox-mixed" : ""}`,
            icon: "zrlog-m3-checkbox-icon",
        }),
        styles: { root: { "--zrlog-m3-on-primary": c.onPrimary } as CSSProperties },
    },
    radio: { classNames: { root: "zrlog-m3-radio", icon: "zrlog-m3-radio-icon" } },
    segmented: {
        // M3 rounds the outer group; inner segments keep their shared straight edges.
        styles: { root: { borderRadius: 9999 } },
        classNames: ({ props }) => ({
            root: `zrlog-m3-segmented${props.vertical || props.orientation === "vertical" ? " zrlog-m3-segmented-vertical" : ""}${props.size === "small" ? " zrlog-m3-segmented-small" : ""}`,
            item: "zrlog-m3-segment",
            label: "zrlog-m3-segment-label",
        }),
    },
    tabs: {
        ...materialIconConfig.tabs,
        classNames: { item: "zrlog-m3-tab", indicator: "zrlog-m3-tab-indicator" },
        indicator: { size: (width) => Math.max(24, width - 32), align: "center" },
        styles: ({ props }) => ({
            indicator: ["start", "end", "left", "right"].includes(props.tabPlacement || props.tabPosition || "top")
                ? { width: 3 } : { height: 3 },
        }),
    },
    tag: {
        classNames: ({ props }) => ({
            root: props.onClick || props.href || props.closable
                ? `zrlog-m3-chip${props.disabled ? " zrlog-m3-chip-disabled" : ""}` : "",
            close: "zrlog-m3-chip-close",
        }),
        styles: ({ props }) => ({
            root: {
                // A flex row can stretch plain Tags to the taller chip height.
                // Center their line boxes without replacing display (Tag hides itself on close).
                alignContent: "center",
                textAlign: "center",
                verticalAlign: "middle",
                ...(!props.disabled && (props.onClick || props.href || props.closable) &&
                    (!props.color || props.color === brand)
                    ? { background: c.primaryContainer, color: c.onPrimaryContainer, borderColor: "transparent" } : {}),
            },
        }),
    },
    slider: {
        classNames: ({ props }) => ({
            root: `zrlog-m3-slider${props.disabled ? " zrlog-m3-slider-disabled" : ""}`,
            handle: "zrlog-m3-slider-handle",
        }),
    },
    progress: {
        classNames: { root: "zrlog-m3-progress" },
        styles: ({ props }) => {
            // Keep explicit dimensions, stepped bars and in-track percentages.
            if ((props.type && props.type !== "line") || props.steps || props.strokeWidth ||
                Array.isArray(props.size) || typeof props.size === "number" || props.percentPosition?.type === "inner") {
                return {};
            }
            return { rail: { height: 4 }, track: { height: 4 } };
        },
    },
    button: {
        ...materialIconConfig.button,
        classNames: ({ props }) => ({
            root: [
                "zrlog-m3-button",
                props.icon && !props.children && props.shape !== "square" ? "zrlog-m3-icon-button" : "",
                props.variant === "filled" && !props.danger && (props.color === "primary" || props.color === "default")
                    ? "zrlog-m3-tonal-button" : "",
            ].filter(Boolean).join(" "),
        }),
    },
    modal: {
        ...materialIconConfig.modal,
        classNames: { container: "zrlog-m3-dialog", header: "zrlog-m3-dialog-header", footer: "zrlog-m3-dialog-footer", close: "zrlog-m3-close" },
        styles: { title: { paddingInlineEnd: 32 } },
        cancelButtonProps: { type: "text" },
    },
    drawer: {
        ...materialIconConfig.drawer,
        // The outer provider's drawer defaults are replaced by this object.
        closable: { placement: "end" },
        classNames: { header: "zrlog-m3-drawer-header", title: "zrlog-m3-drawer-title", footer: "zrlog-m3-drawer-footer", close: "zrlog-m3-close" },
    },
    dropdown: { classNames: { item: "zrlog-m3-menu-item" } },
});
