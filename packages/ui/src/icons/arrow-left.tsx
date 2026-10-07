import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-left";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/arrow-left";
export const icon = { name: "arrow-left", material, antd };
const ArrowLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ArrowLeftIcon.displayName = "ArrowLeftIcon";
export default ArrowLeftIcon;
