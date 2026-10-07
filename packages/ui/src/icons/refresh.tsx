import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/refresh";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/refresh";
export const icon = { name: "refresh", material, antd };
const RefreshIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
RefreshIcon.displayName = "RefreshIcon";
export default RefreshIcon;
