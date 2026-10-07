import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/fullscreen";
import { IconSvg } from "../UiIcon";
const FullscreenIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="fullscreen" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
FullscreenIcon.displayName = "FullscreenIcon";
export default FullscreenIcon;
