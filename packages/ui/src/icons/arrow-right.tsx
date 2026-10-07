import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/arrow-right";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/arrow-right";
export const icon = { name: "arrow-right", material, antd };
const ArrowRightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ArrowRightIcon.displayName = "ArrowRightIcon";
export default ArrowRightIcon;
