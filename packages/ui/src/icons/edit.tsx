import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/edit";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/edit";
export const icon = { name: "edit", material, antd };
const EditIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
EditIcon.displayName = "EditIcon";
export default EditIcon;
