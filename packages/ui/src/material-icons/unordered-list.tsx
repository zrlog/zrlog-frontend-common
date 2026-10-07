import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/unordered-list";
import { IconSvg } from "../UiIcon";
const UnorderedListIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="unordered-list" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
UnorderedListIcon.displayName = "UnorderedListIcon";
export default UnorderedListIcon;
