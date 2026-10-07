import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/zoom-in";
import { IconSvg } from "../UiIcon";
const ZoomInIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="zoom-in" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ZoomInIcon.displayName = "ZoomInIcon";
export default ZoomInIcon;
