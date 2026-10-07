import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/undo";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/undo";
export const icon = { name: "undo", material, antd };
const UndoIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
UndoIcon.displayName = "UndoIcon";
export default UndoIcon;
