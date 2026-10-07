import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/database";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/database";
export const icon = { name: "database", material, antd };
const DatabaseIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
DatabaseIcon.displayName = "DatabaseIcon";
export default DatabaseIcon;
