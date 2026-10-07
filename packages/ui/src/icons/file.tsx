import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/file";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/file";
export const icon = { name: "file", material, antd };
const FileIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FileIcon.displayName = "FileIcon";
export default FileIcon;
