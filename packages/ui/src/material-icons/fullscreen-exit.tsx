import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/fullscreen-exit";
import { IconSvg } from "../UiIcon";
const FullscreenExitIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="fullscreen-exit" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
FullscreenExitIcon.displayName = "FullscreenExitIcon";
export default FullscreenExitIcon;
