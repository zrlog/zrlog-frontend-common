import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/heading-3";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/heading-3";
export const icon = { name: "heading-3", material, antd };
const Heading3Icon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
Heading3Icon.displayName = "Heading3Icon";
export default Heading3Icon;
