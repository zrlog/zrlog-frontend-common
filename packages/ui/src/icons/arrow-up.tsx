import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-up";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/arrow-up";
export const icon = { name: "arrow-up", material, antd };
const ArrowUpIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ArrowUpIcon.displayName = "ArrowUpIcon";
export default ArrowUpIcon;
