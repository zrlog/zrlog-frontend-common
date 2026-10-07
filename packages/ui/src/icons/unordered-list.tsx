import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/unordered-list";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/unordered-list";
export const icon = { name: "unordered-list", material, antd };
const UnorderedListIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
UnorderedListIcon.displayName = "UnorderedListIcon";
export default UnorderedListIcon;
