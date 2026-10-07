import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/fullscreen-exit";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/fullscreen-exit";
export const icon = { name: "fullscreen-exit", material, antd };
const FullscreenExitIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FullscreenExitIcon.displayName = "FullscreenExitIcon";
export default FullscreenExitIcon;
