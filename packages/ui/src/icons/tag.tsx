import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/tag";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/tag";
export const icon = { name: "tag", material, antd };
const TagIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
TagIcon.displayName = "TagIcon";
export default TagIcon;
