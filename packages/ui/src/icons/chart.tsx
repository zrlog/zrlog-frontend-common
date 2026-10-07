import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chart";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chart";
export const icon = { name: "chart", material, antd };
const ChartIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChartIcon.displayName = "ChartIcon";
export default ChartIcon;
