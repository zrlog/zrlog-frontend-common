import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/user";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/user";
export const icon = { name: "user", material, antd };
const UserIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
UserIcon.displayName = "UserIcon";
export default UserIcon;
