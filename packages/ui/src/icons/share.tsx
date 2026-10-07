import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/share";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/share";
export const icon = { name: "share", material, antd };
const ShareIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ShareIcon.displayName = "ShareIcon";
export default ShareIcon;
