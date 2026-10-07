import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { forwardRef } from "react";
import type { ComponentRef, ReactElement, RefAttributes } from "react";
import { useUiIconSet } from "../icon-context";
import ChevronDownIcon from "../material-icons/chevron-down";

const UiInputNumber = forwardRef<ComponentRef<typeof InputNumber>, InputNumberProps>((props, ref) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const controls = material && props.controls !== false ? {
        upIcon: <ChevronDownIcon rotate={180} />, downIcon: <ChevronDownIcon />,
        ...(typeof props.controls === "object" ? props.controls : {}),
    } : props.controls;
    return <InputNumber {...props} ref={ref} controls={controls} />;
});
UiInputNumber.displayName = "UiInputNumber";
// Retain Ant Design's generic value/onChange inference and ref contract.
export default UiInputNumber as <T extends number | string = number | string>(
    props: InputNumberProps<T> & RefAttributes<ComponentRef<typeof InputNumber>>,
) => ReactElement;
