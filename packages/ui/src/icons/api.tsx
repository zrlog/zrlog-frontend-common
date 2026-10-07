import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/api";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/api";
export const icon = { name: "api", material, antd };
const ApiIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ApiIcon.displayName = "ApiIcon";
export default ApiIcon;
