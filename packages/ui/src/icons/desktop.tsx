import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/desktop";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/desktop";
export const icon = { name: "desktop", material, antd };
const DesktopIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DesktopIcon.displayName = "DesktopIcon";
export default DesktopIcon;
