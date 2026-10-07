import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/add-circle";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/add-circle";
export const icon = { name: "add-circle", material, antd };
const AddCircleIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AddCircleIcon.displayName = "AddCircleIcon";
export default AddCircleIcon;
