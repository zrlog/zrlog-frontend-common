import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/stop";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/stop";
export const icon = { name: "stop", material, antd };
const StopIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
StopIcon.displayName = "StopIcon";
export default StopIcon;
