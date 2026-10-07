import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { forwardRef } from "react";
import type { ComponentProps, ComponentRef } from "react";
import { useUiIconSet } from "../icon-context";
import ChevronLeftIcon from "../material-icons/chevron-left";
import ChevronRightIcon from "../material-icons/chevron-right";
import ChevronsLeftIcon from "../material-icons/chevrons-left";
import ChevronsRightIcon from "../material-icons/chevrons-right";

const usePickerIcons = () => useUiIconSet() === "material-symbols-rounded" ? {
    prevIcon: <ChevronLeftIcon />, nextIcon: <ChevronRightIcon />,
    superPrevIcon: <ChevronsLeftIcon />, superNextIcon: <ChevronsRightIcon />,
} : {};
const UiDatePicker = forwardRef<ComponentRef<typeof DatePicker>, DatePickerProps>((props, ref) =>
    <DatePicker {...usePickerIcons()} {...props} ref={ref} />);
const RangePicker = forwardRef<ComponentRef<typeof DatePicker.RangePicker>, ComponentProps<typeof DatePicker.RangePicker>>((props, ref) =>
    <DatePicker.RangePicker {...usePickerIcons()} {...props} ref={ref} />);
UiDatePicker.displayName = "UiDatePicker";
RangePicker.displayName = "UiRangePicker";
export default Object.assign(UiDatePicker, { RangePicker });
