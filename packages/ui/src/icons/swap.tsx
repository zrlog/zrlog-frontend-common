import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/swap";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/swap";
export const icon = { name: "swap", material, antd };
const SwapIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SwapIcon.displayName = "SwapIcon";
export default SwapIcon;
