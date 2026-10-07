import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/eye-off";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/eye-off";
export const icon = { name: "eye-off", material, antd };
const EyeOffIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
EyeOffIcon.displayName = "EyeOffIcon";
export default EyeOffIcon;
