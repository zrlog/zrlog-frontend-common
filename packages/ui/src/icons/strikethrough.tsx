import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/strikethrough";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/strikethrough";
export const icon = { name: "strikethrough", material, antd };
const StrikethroughIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
StrikethroughIcon.displayName = "StrikethroughIcon";
export default StrikethroughIcon;
