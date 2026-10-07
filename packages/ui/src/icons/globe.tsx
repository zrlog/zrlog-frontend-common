import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/globe";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/globe";
export const icon = { name: "globe", material, antd };
const GlobeIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
GlobeIcon.displayName = "GlobeIcon";
export default GlobeIcon;
