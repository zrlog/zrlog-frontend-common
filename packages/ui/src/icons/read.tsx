import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/read";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/read";
export const icon = { name: "read", material, antd };
const ReadIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ReadIcon.displayName = "ReadIcon";
export default ReadIcon;
