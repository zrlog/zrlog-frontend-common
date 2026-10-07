import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/apps";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/apps";
export const icon = { name: "apps", material, antd };
const AppsIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AppsIcon.displayName = "AppsIcon";
export default AppsIcon;
