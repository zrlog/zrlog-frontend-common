import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/sliders";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/sliders";
export const icon = { name: "sliders", material, antd };
const SlidersIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SlidersIcon.displayName = "SlidersIcon";
export default SlidersIcon;
