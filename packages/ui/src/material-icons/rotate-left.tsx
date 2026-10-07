import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/rotate-left";
import { IconSvg } from "../UiIcon";
const RotateLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="rotate-left" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
RotateLeftIcon.displayName = "RotateLeftIcon";
export default RotateLeftIcon;
