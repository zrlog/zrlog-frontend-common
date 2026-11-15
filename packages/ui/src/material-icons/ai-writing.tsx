import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/ai-writing";
import { IconSvg } from "../UiIcon";
const AiWritingIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="ai-writing" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
AiWritingIcon.displayName = "AiWritingIcon";
export default AiWritingIcon;
