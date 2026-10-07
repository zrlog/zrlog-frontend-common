import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/pie-chart";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/pie-chart";
export const icon = { name: "pie-chart", material, antd };
const PieChartIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
PieChartIcon.displayName = "PieChartIcon";
export default PieChartIcon;
