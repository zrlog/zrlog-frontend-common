import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/archive";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/archive";
export const icon = { name: "archive", material, antd };
const ArchiveIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ArchiveIcon.displayName = "ArchiveIcon";
export default ArchiveIcon;
