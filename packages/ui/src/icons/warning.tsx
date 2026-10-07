import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/warning";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/warning";
export const icon = { name: "warning", material, antd };
const WarningIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
WarningIcon.displayName = "WarningIcon";
export default WarningIcon;
