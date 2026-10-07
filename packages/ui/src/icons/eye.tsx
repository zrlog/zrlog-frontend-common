import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/eye";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/eye";
export const icon = { name: "eye", material, antd };
const EyeIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
EyeIcon.displayName = "EyeIcon";
export default EyeIcon;
