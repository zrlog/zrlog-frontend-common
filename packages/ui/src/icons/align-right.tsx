import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/align-right";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/align-right";
export const icon = { name: "align-right", material, antd };
const AlignRightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AlignRightIcon.displayName = "AlignRightIcon";
export default AlignRightIcon;
