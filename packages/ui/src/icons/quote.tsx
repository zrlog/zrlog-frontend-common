import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/quote";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/quote";
export const icon = { name: "quote", material, antd };
const QuoteIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
QuoteIcon.displayName = "QuoteIcon";
export default QuoteIcon;
