import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cpu";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/cpu";
export const icon = { name: "cpu", material, antd };
const CpuIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CpuIcon.displayName = "CpuIcon";
export default CpuIcon;
