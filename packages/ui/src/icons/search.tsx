import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/search";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/search";
export const icon = { name: "search", material, antd };
const SearchIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
SearchIcon.displayName = "SearchIcon";
export default SearchIcon;
