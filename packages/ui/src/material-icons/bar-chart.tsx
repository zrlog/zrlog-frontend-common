import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/bar-chart";
import { IconSvg } from "../UiIcon";
const BarChartIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="bar-chart" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
BarChartIcon.displayName = "BarChartIcon";
export default BarChartIcon;
