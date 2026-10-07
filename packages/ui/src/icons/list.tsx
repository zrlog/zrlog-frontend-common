import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/list";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/list";
export const icon = { name: "list", material, antd };
const ListIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ListIcon.displayName = "ListIcon";
export default ListIcon;
