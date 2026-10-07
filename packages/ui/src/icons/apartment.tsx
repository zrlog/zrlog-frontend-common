import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/apartment";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/apartment";
export const icon = { name: "apartment", material, antd };
const ApartmentIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ApartmentIcon.displayName = "ApartmentIcon";
export default ApartmentIcon;
