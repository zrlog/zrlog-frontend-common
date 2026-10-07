import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevrons-left";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chevrons-left";
export const icon = { name: "chevrons-left", material, antd };
const ChevronsLeftIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChevronsLeftIcon.displayName = "ChevronsLeftIcon";
export default ChevronsLeftIcon;
