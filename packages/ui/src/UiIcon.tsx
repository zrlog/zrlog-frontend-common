import { createElement, forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { useUiIconSet } from "./icon-context";
import type { UiIconSet } from "./themes";

export type IconNode = {
    tag: string;
    attrs: Readonly<Record<string, string | number>>;
    children?: readonly IconNode[];
};

export type IconGlyph = { viewBox: string; nodes: readonly IconNode[] };
export type IconVariants = { regular: IconGlyph; selected?: IconGlyph };
export type UiIconDefinition = {
    name: string;
    material: IconVariants;
    antd: IconVariants;
    spin?: boolean;
};

export type UiIconProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
    selected?: boolean;
    size?: number | string;
    spin?: boolean;
    rotate?: number;
    label?: string;
};

const renderNode = (node: IconNode, index: number): React.ReactNode =>
    createElement(node.tag, { ...node.attrs, key: index }, node.children?.map(renderNode));

// Both adapters render the same box. Color and size inherit from the host control.
export const IconSvg = forwardRef<HTMLSpanElement, UiIconProps & {
    name: string;
    glyph: IconGlyph;
    iconSet: UiIconSet;
}>(({ name, glyph, iconSet, selected = false, size, spin = false, rotate, label,
    className, style, ...props }, ref) => {
    const accessibleLabel = props["aria-label"] ?? label;
    const labelled = !!(accessibleLabel || props["aria-labelledby"] || props.title);
    const svgStyle: CSSProperties = {
        display: "block",
        ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
    };
    return <span
        ref={ref}
        role={labelled ? "img" : undefined}
        aria-hidden={labelled ? undefined : true}
        {...props}
        aria-label={accessibleLabel}
        className={["anticon", "zrlog-icon", className].filter(Boolean).join(" ")}
        data-icon={name}
        data-icon-set={iconSet}
        data-selected={selected || undefined}
        data-spin={spin || undefined}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
            verticalAlign: "-0.125em", lineHeight: 0, flexShrink: 0,
            ...(size !== undefined ? { fontSize: size } : {}), ...style }}
    >
        <svg viewBox={glyph.viewBox} width="1em" height="1em" fill="currentColor"
            focusable="false" aria-hidden="true" style={svgStyle}>
            {glyph.nodes.map(renderNode)}
        </svg>
    </span>;
});
IconSvg.displayName = "IconSvg";

export const UiIcon = forwardRef<HTMLSpanElement, UiIconProps & { icon: UiIconDefinition }>(
    ({ icon, selected = false, spin = icon.spin, ...props }, ref) => {
        const iconSet = useUiIconSet();
        const variants = iconSet === "material-symbols-rounded" ? icon.material : icon.antd;
        return <IconSvg {...props} ref={ref} name={icon.name} iconSet={iconSet}
            selected={selected} spin={spin}
            glyph={selected ? variants.selected ?? variants.regular : variants.regular} />;
    },
);
UiIcon.displayName = "UiIcon";
