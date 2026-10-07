import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/chevrons-right";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/chevrons-right";
export const icon = { name: "chevrons-right", material, antd };
const ChevronsRightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ChevronsRightIcon.displayName = "ChevronsRightIcon";
export default ChevronsRightIcon;
