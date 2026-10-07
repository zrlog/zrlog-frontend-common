import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/delete";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/delete";
export const icon = { name: "delete", material, antd };
const DeleteIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DeleteIcon.displayName = "DeleteIcon";
export default DeleteIcon;
