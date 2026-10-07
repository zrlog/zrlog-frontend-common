import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/ordered-list";
import { IconSvg } from "../UiIcon";
const OrderedListIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="ordered-list" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
OrderedListIcon.displayName = "OrderedListIcon";
export default OrderedListIcon;
