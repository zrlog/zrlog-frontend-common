import { forwardRef } from "react";
import type { UiIconProps } from "../UiIcon";
import material from "../glyphs/material/experiment";
import { UiIcon } from "../UiIcon";
import antd from "../glyphs/antd/experiment";
export const icon = { name: "experiment", material, antd };
const ExperimentIcon = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {...props} ref={ref} icon={icon} />);
ExperimentIcon.displayName = "ExperimentIcon";
export default ExperimentIcon;
