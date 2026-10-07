import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/check";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/check";
export const icon = { name: "check", material, antd };
const CheckIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CheckIcon.displayName = "CheckIcon";
export default CheckIcon;
