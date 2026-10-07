import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/align-left";
import { IconSvg } from "../UiIcon";
const AlignLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="align-left" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
AlignLeftIcon.displayName = "AlignLeftIcon";
export default AlignLeftIcon;
