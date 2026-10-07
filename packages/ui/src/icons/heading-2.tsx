import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/heading-2";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/heading-2";
export const icon = { name: "heading-2", material, antd };
const Heading2Icon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
Heading2Icon.displayName = "Heading2Icon";
export default Heading2Icon;
