import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/horizontal-rule";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/horizontal-rule";
export const icon = { name: "horizontal-rule", material, antd };
const HorizontalRuleIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
HorizontalRuleIcon.displayName = "HorizontalRuleIcon";
export default HorizontalRuleIcon;
