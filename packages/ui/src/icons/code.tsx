import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/code";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/code";
export const icon = { name: "code", material, antd };
const CodeIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CodeIcon.displayName = "CodeIcon";
export default CodeIcon;
