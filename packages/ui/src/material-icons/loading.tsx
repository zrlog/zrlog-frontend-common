import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/loading";
import { IconSvg } from "../UiIcon";
const LoadingIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="loading" iconSet="material-symbols-rounded" selected={selected} spin
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
LoadingIcon.displayName = "LoadingIcon";
export default LoadingIcon;
