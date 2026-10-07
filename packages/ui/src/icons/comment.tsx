import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/comment";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/comment";
export const icon = { name: "comment", material, antd };
const CommentIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
CommentIcon.displayName = "CommentIcon";
export default CommentIcon;
