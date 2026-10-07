import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/pin";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/pin";
export const icon = { name: "pin", material, antd };
const PinIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
PinIcon.displayName = "PinIcon";
export default PinIcon;
