import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/italic";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/italic";
export const icon = { name: "italic", material, antd };
const ItalicIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ItalicIcon.displayName = "ItalicIcon";
export default ItalicIcon;
