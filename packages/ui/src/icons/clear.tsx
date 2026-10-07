import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/clear";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/clear";
export const icon = { name: "clear", material, antd };
const ClearIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ClearIcon.displayName = "ClearIcon";
export default ClearIcon;
