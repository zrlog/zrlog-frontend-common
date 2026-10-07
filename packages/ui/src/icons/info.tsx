import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/info";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/info";
export const icon = { name: "info", material, antd };
const InfoIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
InfoIcon.displayName = "InfoIcon";
export default InfoIcon;
