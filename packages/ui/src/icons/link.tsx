import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/link";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/link";
export const icon = { name: "link", material, antd };
const LinkIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
LinkIcon.displayName = "LinkIcon";
export default LinkIcon;
