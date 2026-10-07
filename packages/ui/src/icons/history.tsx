import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/history";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/history";
export const icon = { name: "history", material, antd };
const HistoryIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
HistoryIcon.displayName = "HistoryIcon";
export default HistoryIcon;
