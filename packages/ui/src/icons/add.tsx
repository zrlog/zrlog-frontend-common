import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/add";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/add";
export const icon = { name: "add", material, antd };
const AddIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AddIcon.displayName = "AddIcon";
export default AddIcon;
