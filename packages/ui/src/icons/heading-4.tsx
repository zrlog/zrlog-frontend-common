import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/heading-4";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/heading-4";
export const icon = { name: "heading-4", material, antd };
const Heading4Icon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
Heading4Icon.displayName = "Heading4Icon";
export default Heading4Icon;
