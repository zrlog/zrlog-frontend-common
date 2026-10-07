import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/bar-chart";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/bar-chart";
export const icon = { name: "bar-chart", material, antd };
const BarChartIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
BarChartIcon.displayName = "BarChartIcon";
export default BarChartIcon;
