import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/calendar";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/calendar";
export const icon = { name: "calendar", material, antd };
const CalendarIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CalendarIcon.displayName = "CalendarIcon";
export default CalendarIcon;
