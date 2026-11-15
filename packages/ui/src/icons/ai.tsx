import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/ai";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/ai";
export const icon = { name: "ai", material, antd };
const AiIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AiIcon.displayName = "AiIcon";
export default AiIcon;
