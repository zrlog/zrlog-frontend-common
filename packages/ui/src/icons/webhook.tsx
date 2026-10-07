import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/webhook";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/webhook";
export const icon = { name: "webhook", material, antd };
const WebhookIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
WebhookIcon.displayName = "WebhookIcon";
export default WebhookIcon;
