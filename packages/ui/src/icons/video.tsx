import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/video";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/video";
export const icon = { name: "video", material, antd };
const VideoIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
VideoIcon.displayName = "VideoIcon";
export default VideoIcon;
