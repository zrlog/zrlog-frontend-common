import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/tags";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/tags";
export const icon = { name: "tags", material, antd };
const TagsIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
TagsIcon.displayName = "TagsIcon";
export default TagsIcon;
