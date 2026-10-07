import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/partition";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/partition";
export const icon = { name: "partition", material, antd };
const PartitionIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
PartitionIcon.displayName = "PartitionIcon";
export default PartitionIcon;
