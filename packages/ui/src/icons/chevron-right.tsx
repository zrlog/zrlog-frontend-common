import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevron-right";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chevron-right";
export const icon = { name: "chevron-right", material, antd };
const ChevronRightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChevronRightIcon.displayName = "ChevronRightIcon";
export default ChevronRightIcon;
