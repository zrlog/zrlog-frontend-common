import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/download";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/download";
export const icon = { name: "download", material, antd };
const DownloadIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DownloadIcon.displayName = "DownloadIcon";
export default DownloadIcon;
