import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/sun";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/sun";
export const icon = { name: "sun", material, antd };
const SunIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SunIcon.displayName = "SunIcon";
export default SunIcon;
