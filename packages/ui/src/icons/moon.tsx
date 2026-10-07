import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/moon";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/moon";
export const icon = { name: "moon", material, antd };
const MoonIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MoonIcon.displayName = "MoonIcon";
export default MoonIcon;
