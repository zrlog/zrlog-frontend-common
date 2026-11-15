import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/ai-writing";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/ai-writing";
export const icon = { name: "ai-writing", material, antd };
const AiWritingIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
AiWritingIcon.displayName = "AiWritingIcon";
export default AiWritingIcon;
