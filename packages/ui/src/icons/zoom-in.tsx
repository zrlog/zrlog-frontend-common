import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/zoom-in";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/zoom-in";
export const icon = { name: "zoom-in", material, antd };
const ZoomInIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ZoomInIcon.displayName = "ZoomInIcon";
export default ZoomInIcon;
