import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cut";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/cut";
export const icon = { name: "cut", material, antd };
const CutIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CutIcon.displayName = "CutIcon";
export default CutIcon;
