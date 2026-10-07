import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevron-down";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chevron-down";
export const icon = { name: "chevron-down", material, antd };
const ChevronDownIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChevronDownIcon.displayName = "ChevronDownIcon";
export default ChevronDownIcon;
