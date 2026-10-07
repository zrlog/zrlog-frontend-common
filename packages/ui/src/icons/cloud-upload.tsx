import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cloud-upload";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/cloud-upload";
export const icon = { name: "cloud-upload", material, antd };
const CloudUploadIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CloudUploadIcon.displayName = "CloudUploadIcon";
export default CloudUploadIcon;
