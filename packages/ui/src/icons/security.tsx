import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/security";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/security";
export const icon = { name: "security", material, antd };
const SecurityIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SecurityIcon.displayName = "SecurityIcon";
export default SecurityIcon;
