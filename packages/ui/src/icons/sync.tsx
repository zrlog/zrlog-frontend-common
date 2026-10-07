import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/sync";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/sync";
export const icon = { name: "sync", material, antd };
const SyncIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SyncIcon.displayName = "SyncIcon";
export default SyncIcon;
