import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/filter";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/filter";
export const icon = { name: "filter", material, antd };
const FilterIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
FilterIcon.displayName = "FilterIcon";
export default FilterIcon;
