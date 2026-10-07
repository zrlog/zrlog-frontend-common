import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevron-left";
import { IconSvg } from "../UiIcon";
const ChevronLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="chevron-left" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ChevronLeftIcon.displayName = "ChevronLeftIcon";
export default ChevronLeftIcon;
