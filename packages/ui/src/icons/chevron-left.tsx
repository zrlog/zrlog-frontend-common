import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevron-left";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chevron-left";
export const icon = { name: "chevron-left", material, antd };
const ChevronLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChevronLeftIcon.displayName = "ChevronLeftIcon";
export default ChevronLeftIcon;
