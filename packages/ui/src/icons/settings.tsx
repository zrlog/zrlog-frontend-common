import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/settings";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/settings";
export const icon = { name: "settings", material, antd };
const SettingsIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SettingsIcon.displayName = "SettingsIcon";
export default SettingsIcon;
