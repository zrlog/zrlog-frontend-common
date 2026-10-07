import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/disk";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/disk";
export const icon = { name: "disk", material, antd };
const DiskIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DiskIcon.displayName = "DiskIcon";
export default DiskIcon;
