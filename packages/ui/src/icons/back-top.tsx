import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/back-top";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/back-top";
export const icon = { name: "back-top", material, antd };
const BackTopIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
BackTopIcon.displayName = "BackTopIcon";
export default BackTopIcon;
