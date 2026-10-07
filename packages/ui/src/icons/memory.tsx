import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/memory";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/memory";
export const icon = { name: "memory", material, antd };
const MemoryIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MemoryIcon.displayName = "MemoryIcon";
export default MemoryIcon;
