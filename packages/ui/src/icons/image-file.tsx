import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/image-file";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/image-file";
export const icon = { name: "image-file", material, antd };
const ImageFileIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ImageFileIcon.displayName = "ImageFileIcon";
export default ImageFileIcon;
