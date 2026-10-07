import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/star";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/star";
export const icon = { name: "star", material, antd };
const StarIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
StarIcon.displayName = "StarIcon";
export default StarIcon;
