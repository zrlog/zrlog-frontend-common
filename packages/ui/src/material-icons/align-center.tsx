import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/align-center";
import { IconSvg } from "../UiIcon";
const AlignCenterIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="align-center" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
AlignCenterIcon.displayName = "AlignCenterIcon";
export default AlignCenterIcon;
