import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/external-link";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/external-link";
export const icon = { name: "external-link", material, antd };
const ExternalLinkIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ExternalLinkIcon.displayName = "ExternalLinkIcon";
export default ExternalLinkIcon;
