import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/login";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/login";
export const icon = { name: "login", material, antd };
const LoginIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
LoginIcon.displayName = "LoginIcon";
export default LoginIcon;
