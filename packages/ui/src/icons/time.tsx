import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/time";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/time";
export const icon = { name: "time", material, antd };
const TimeIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
TimeIcon.displayName = "TimeIcon";
export default TimeIcon;
