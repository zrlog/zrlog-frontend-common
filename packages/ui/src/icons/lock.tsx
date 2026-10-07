import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/lock";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/lock";
export const icon = { name: "lock", material, antd };
const LockIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
LockIcon.displayName = "LockIcon";
export default LockIcon;
