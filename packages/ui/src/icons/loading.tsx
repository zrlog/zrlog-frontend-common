import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/loading";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/loading";
export const icon = { name: "loading", material, antd, spin: true };
const LoadingIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
LoadingIcon.displayName = "LoadingIcon";
export default LoadingIcon;
