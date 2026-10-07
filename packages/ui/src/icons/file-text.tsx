import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/file-text";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/file-text";
export const icon = { name: "file-text", material, antd };
const FileTextIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FileTextIcon.displayName = "FileTextIcon";
export default FileTextIcon;
