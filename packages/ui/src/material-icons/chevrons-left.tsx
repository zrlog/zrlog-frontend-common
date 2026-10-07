import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevrons-left";
import { IconSvg } from "../UiIcon";
const ChevronsLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="chevrons-left" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ChevronsLeftIcon.displayName = "ChevronsLeftIcon";
export default ChevronsLeftIcon;
