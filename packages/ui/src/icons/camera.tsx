import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/camera";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/camera";
export const icon = { name: "camera", material, antd };
const CameraIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CameraIcon.displayName = "CameraIcon";
export default CameraIcon;
