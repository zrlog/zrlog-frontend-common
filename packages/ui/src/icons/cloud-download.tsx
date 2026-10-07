import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cloud-download";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/cloud-download";
export const icon = { name: "cloud-download", material, antd };
const CloudDownloadIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CloudDownloadIcon.displayName = "CloudDownloadIcon";
export default CloudDownloadIcon;
