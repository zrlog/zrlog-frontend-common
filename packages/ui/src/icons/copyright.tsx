import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/copyright";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/copyright";
export const icon = { name: "copyright", material, antd };
const CopyrightIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CopyrightIcon.displayName = "CopyrightIcon";
export default CopyrightIcon;
