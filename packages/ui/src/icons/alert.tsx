import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/alert";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/alert";
export const icon = { name: "alert", material, antd };
const AlertIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AlertIcon.displayName = "AlertIcon";
export default AlertIcon;
