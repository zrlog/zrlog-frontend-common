import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/align-center";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/align-center";
export const icon = { name: "align-center", material, antd };
const AlignCenterIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AlignCenterIcon.displayName = "AlignCenterIcon";
export default AlignCenterIcon;
