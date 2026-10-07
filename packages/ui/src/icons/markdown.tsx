import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/markdown";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/markdown";
export const icon = { name: "markdown", material, antd };
const MarkdownIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MarkdownIcon.displayName = "MarkdownIcon";
export default MarkdownIcon;
