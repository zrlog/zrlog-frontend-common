import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/align-left";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/align-left";
export const icon = { name: "align-left", material, antd };
const AlignLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AlignLeftIcon.displayName = "AlignLeftIcon";
export default AlignLeftIcon;
