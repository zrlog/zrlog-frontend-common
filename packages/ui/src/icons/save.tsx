import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/save";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/save";
export const icon = { name: "save", material, antd };
const SaveIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SaveIcon.displayName = "SaveIcon";
export default SaveIcon;
