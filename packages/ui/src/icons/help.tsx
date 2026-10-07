import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/help";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/help";
export const icon = { name: "help", material, antd };
const HelpIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
HelpIcon.displayName = "HelpIcon";
export default HelpIcon;
