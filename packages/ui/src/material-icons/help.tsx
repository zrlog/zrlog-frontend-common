import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/help";
import { IconSvg } from "../UiIcon";
const HelpIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="help" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
HelpIcon.displayName = "HelpIcon";
export default HelpIcon;
