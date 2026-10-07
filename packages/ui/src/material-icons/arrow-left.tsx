import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-left";
import { IconSvg } from "../UiIcon";
const ArrowLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="arrow-left" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ArrowLeftIcon.displayName = "ArrowLeftIcon";
export default ArrowLeftIcon;
