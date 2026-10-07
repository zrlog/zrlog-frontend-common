import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/copy";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/copy";
export const icon = { name: "copy", material, antd };
const CopyIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CopyIcon.displayName = "CopyIcon";
export default CopyIcon;
