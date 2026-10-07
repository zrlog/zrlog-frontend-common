import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/rotate-right";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/rotate-right";
export const icon = { name: "rotate-right", material, antd };
const RotateRightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
RotateRightIcon.displayName = "RotateRightIcon";
export default RotateRightIcon;
