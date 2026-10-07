import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/close";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/close";
export const icon = { name: "close", material, antd };
const CloseIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CloseIcon.displayName = "CloseIcon";
export default CloseIcon;
