import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/success";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/success";
export const icon = { name: "success", material, antd };
const SuccessIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SuccessIcon.displayName = "SuccessIcon";
export default SuccessIcon;
