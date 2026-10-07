import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/appearance";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/appearance";
export const icon = { name: "appearance", material, antd };
const AppearanceIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AppearanceIcon.displayName = "AppearanceIcon";
export default AppearanceIcon;
