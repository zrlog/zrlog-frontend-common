import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/mobile";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/mobile";
export const icon = { name: "mobile", material, antd };
const MobileIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MobileIcon.displayName = "MobileIcon";
export default MobileIcon;
