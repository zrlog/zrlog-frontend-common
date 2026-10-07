import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/image";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/image";
export const icon = { name: "image", material, antd };
const ImageIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ImageIcon.displayName = "ImageIcon";
export default ImageIcon;
