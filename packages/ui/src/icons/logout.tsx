import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/logout";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/logout";
export const icon = { name: "logout", material, antd };
const LogoutIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
LogoutIcon.displayName = "LogoutIcon";
export default LogoutIcon;
