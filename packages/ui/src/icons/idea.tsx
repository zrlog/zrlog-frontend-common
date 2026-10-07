import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/idea";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/idea";
export const icon = { name: "idea", material, antd };
const IdeaIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
IdeaIcon.displayName = "IdeaIcon";
export default IdeaIcon;
