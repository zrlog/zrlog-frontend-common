import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/zoom-out";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/zoom-out";
export const icon = { name: "zoom-out", material, antd };
const ZoomOutIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ZoomOutIcon.displayName = "ZoomOutIcon";
export default ZoomOutIcon;
