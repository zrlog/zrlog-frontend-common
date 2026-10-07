import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/external-link";
import { IconSvg } from "../UiIcon";
const ExternalLinkIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="external-link" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
ExternalLinkIcon.displayName = "ExternalLinkIcon";
export default ExternalLinkIcon;
