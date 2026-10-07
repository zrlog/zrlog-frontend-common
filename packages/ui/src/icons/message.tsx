import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/message";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/message";
export const icon = { name: "message", material, antd };
const MessageIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
MessageIcon.displayName = "MessageIcon";
export default MessageIcon;
