import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/bolt";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/bolt";
export const icon = { name: "bolt", material, antd };
const BoltIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
BoltIcon.displayName = "BoltIcon";
export default BoltIcon;
