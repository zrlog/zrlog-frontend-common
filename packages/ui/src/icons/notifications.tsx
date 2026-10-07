import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/notifications";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/notifications";
export const icon = { name: "notifications", material, antd };
const NotificationsIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
NotificationsIcon.displayName = "NotificationsIcon";
export default NotificationsIcon;
