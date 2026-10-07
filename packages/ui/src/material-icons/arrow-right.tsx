import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-right";
import { IconSvg } from "../UiIcon";
const ArrowRightIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="arrow-right" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ArrowRightIcon.displayName = "ArrowRightIcon";
export default ArrowRightIcon;
