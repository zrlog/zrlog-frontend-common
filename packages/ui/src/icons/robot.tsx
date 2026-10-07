import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/robot";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/robot";
export const icon = { name: "robot", material, antd };
const RobotIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
RobotIcon.displayName = "RobotIcon";
export default RobotIcon;
