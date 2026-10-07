import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/strikethrough";
import { IconSvg } from "../UiIcon";
const StrikethroughIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="strikethrough" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
StrikethroughIcon.displayName = "StrikethroughIcon";
export default StrikethroughIcon;
