import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/more";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/more";
export const icon = { name: "more", material, antd };
const MoreIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MoreIcon.displayName = "MoreIcon";
export default MoreIcon;
