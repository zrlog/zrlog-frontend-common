import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/folder-add";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/folder-add";
export const icon = { name: "folder-add", material, antd };
const FolderAddIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FolderAddIcon.displayName = "FolderAddIcon";
export default FolderAddIcon;
