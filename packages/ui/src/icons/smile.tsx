import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/smile";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/smile";
export const icon = { name: "smile", material, antd };
const SmileIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SmileIcon.displayName = "SmileIcon";
export default SmileIcon;
