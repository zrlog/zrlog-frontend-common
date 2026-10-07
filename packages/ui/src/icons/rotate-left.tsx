import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/rotate-left";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/rotate-left";
export const icon = { name: "rotate-left", material, antd };
const RotateLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
RotateLeftIcon.displayName = "RotateLeftIcon";
export default RotateLeftIcon;
