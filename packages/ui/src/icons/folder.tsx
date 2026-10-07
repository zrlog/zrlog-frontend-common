import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/folder";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/folder";
export const icon = { name: "folder", material, antd };
const FolderIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FolderIcon.displayName = "FolderIcon";
export default FolderIcon;
