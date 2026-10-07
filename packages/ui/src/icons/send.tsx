import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/send";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/send";
export const icon = { name: "send", material, antd };
const SendIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SendIcon.displayName = "SendIcon";
export default SendIcon;
