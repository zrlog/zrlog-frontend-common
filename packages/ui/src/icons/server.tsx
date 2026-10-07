import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/server";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/server";
export const icon = { name: "server", material, antd };
const ServerIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ServerIcon.displayName = "ServerIcon";
export default ServerIcon;
