import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/error";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/error";
export const icon = { name: "error", material, antd };
const ErrorIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ErrorIcon.displayName = "ErrorIcon";
export default ErrorIcon;
