import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/pdf";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/pdf";
export const icon = { name: "pdf", material, antd };
const PdfIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
PdfIcon.displayName = "PdfIcon";
export default PdfIcon;
