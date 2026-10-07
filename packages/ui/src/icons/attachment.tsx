import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/attachment";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/attachment";
export const icon = { name: "attachment", material, antd };
const AttachmentIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AttachmentIcon.displayName = "AttachmentIcon";
export default AttachmentIcon;
