import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/cloud-download";
import { IconSvg } from "../UiIcon";
const CloudDownloadIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="cloud-download" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
CloudDownloadIcon.displayName = "CloudDownloadIcon";
export default CloudDownloadIcon;
