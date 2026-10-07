import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/container";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/container";
export const icon = { name: "container", material, antd };
const ContainerIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ContainerIcon.displayName = "ContainerIcon";
export default ContainerIcon;
