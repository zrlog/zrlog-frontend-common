import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/send";
import { IconSvg } from "../UiIcon";
const SendIcon = forwardRef<HTMLSpanElement, UiIconProps>(({ selected = false, ...props }, ref) => (
    <IconSvg name="send" iconSet="material-symbols-rounded" selected={selected}
        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />
));
SendIcon.displayName = "SendIcon";
export default SendIcon;
