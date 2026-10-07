import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/dashboard";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/dashboard";
export const icon = { name: "dashboard", material, antd };
const DashboardIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DashboardIcon.displayName = "DashboardIcon";
export default DashboardIcon;
