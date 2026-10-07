import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevrons-right";
import { IconSvg } from "../UiIcon";
const ChevronsRightIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="chevrons-right" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ChevronsRightIcon.displayName = "ChevronsRightIcon";
export default ChevronsRightIcon;
