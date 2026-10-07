import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/upload";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/upload";
export const icon = { name: "upload", material, antd };
const UploadIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
UploadIcon.displayName = "UploadIcon";
export default UploadIcon;
