import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cloud-upload";
import { IconSvg } from "../UiIcon";
const CloudUploadIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="cloud-upload" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
CloudUploadIcon.displayName = "CloudUploadIcon";
export default CloudUploadIcon;
