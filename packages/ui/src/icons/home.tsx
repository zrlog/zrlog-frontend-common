import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/home";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/home";
export const icon = { name: "home", material, antd };
const HomeIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
HomeIcon.displayName = "HomeIcon";
export default HomeIcon;
