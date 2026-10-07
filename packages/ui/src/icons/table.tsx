import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/table";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/table";
export const icon = { name: "table", material, antd };
const TableIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
TableIcon.displayName = "TableIcon";
export default TableIcon;
