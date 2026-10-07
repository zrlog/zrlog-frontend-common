import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/horizontal-rule";
import { IconSvg } from "../UiIcon";
const HorizontalRuleIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="horizontal-rule" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
HorizontalRuleIcon.displayName = "HorizontalRuleIcon";
export default HorizontalRuleIcon;
