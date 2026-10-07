import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevron-right";
import { IconSvg } from "../UiIcon";
const ChevronRightIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="chevron-right" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ChevronRightIcon.displayName = "ChevronRightIcon";
export default ChevronRightIcon;
