import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-down";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/arrow-down";
export const icon = { name: "arrow-down", material, antd };
const ArrowDownIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ArrowDownIcon.displayName = "ArrowDownIcon";
export default ArrowDownIcon;
