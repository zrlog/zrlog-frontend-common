import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/menu";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/menu";
export const icon = { name: "menu", material, antd };
const MenuIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MenuIcon.displayName = "MenuIcon";
export default MenuIcon;
