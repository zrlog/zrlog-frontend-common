import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/flip";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/flip";
export const icon = { name: "flip", material, antd };
const FlipIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FlipIcon.displayName = "FlipIcon";
export default FlipIcon;
