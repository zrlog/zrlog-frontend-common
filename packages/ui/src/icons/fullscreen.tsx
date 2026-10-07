import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/fullscreen";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/fullscreen";
export const icon = { name: "fullscreen", material, antd };
const FullscreenIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FullscreenIcon.displayName = "FullscreenIcon";
export default FullscreenIcon;
