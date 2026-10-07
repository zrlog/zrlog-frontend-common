import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/bold";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/bold";
export const icon = { name: "bold", material, antd };
const BoldIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
BoldIcon.displayName = "BoldIcon";
export default BoldIcon;
