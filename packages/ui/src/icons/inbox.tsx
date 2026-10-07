import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/inbox";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/inbox";
export const icon = { name: "inbox", material, antd };
const InboxIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
InboxIcon.displayName = "InboxIcon";
export default InboxIcon;
