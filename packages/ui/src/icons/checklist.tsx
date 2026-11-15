import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/checklist";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/checklist";
export const icon = { name: "checklist", material, antd };
const ChecklistIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChecklistIcon.displayName = "ChecklistIcon";
export default ChecklistIcon;
