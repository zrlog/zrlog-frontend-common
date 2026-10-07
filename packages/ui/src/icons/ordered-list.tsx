import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/ordered-list";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/ordered-list";
export const icon = { name: "ordered-list", material, antd };
const OrderedListIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
OrderedListIcon.displayName = "OrderedListIcon";
export default OrderedListIcon;
