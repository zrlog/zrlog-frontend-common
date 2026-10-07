import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/rotate-right";
import { IconSvg } from "../UiIcon";
const RotateRightIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="rotate-right" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
RotateRightIcon.displayName = "RotateRightIcon";
export default RotateRightIcon;
