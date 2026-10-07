import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/key";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/key";
export const icon = { name: "key", material, antd };
const KeyIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
KeyIcon.displayName = "KeyIcon";
export default KeyIcon;
