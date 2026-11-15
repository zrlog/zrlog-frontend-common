import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/crop";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/crop";
export const icon = { name: "crop", material, antd };
const CropIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CropIcon.displayName = "CropIcon";
export default CropIcon;
