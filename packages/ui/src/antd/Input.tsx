import { Input } from "antd";
import { forwardRef } from "react";
import type { ComponentProps, ComponentRef } from "react";
import { useUiIconSet } from "../icon-context";
import ErrorIcon from "../material-icons/error";

const useClearIcon = <T extends { allowClear?: boolean | { clearIcon?: React.ReactNode } }>(props: T): T => {
    const material = useUiIconSet() === "material-symbols-rounded";
    return material && props.allowClear === true ? { ...props, allowClear: { clearIcon: <ErrorIcon selected /> } } : props;
};

const UiInput = forwardRef<ComponentRef<typeof Input>, ComponentProps<typeof Input>>((props, ref) =>
    <Input {...useClearIcon(props)} ref={ref} />);
const Search = forwardRef<ComponentRef<typeof Input.Search>, ComponentProps<typeof Input.Search>>((props, ref) =>
    <Input.Search {...useClearIcon(props)} ref={ref} />);
const TextArea = forwardRef<ComponentRef<typeof Input.TextArea>, ComponentProps<typeof Input.TextArea>>((props, ref) =>
    <Input.TextArea {...useClearIcon(props)} ref={ref} />);
const Password = forwardRef<ComponentRef<typeof Input.Password>, ComponentProps<typeof Input.Password>>((props, ref) =>
    <Input.Password {...useClearIcon(props)} ref={ref} />);
UiInput.displayName = "UiInput";
Search.displayName = "UiInputSearch";
TextArea.displayName = "UiTextArea";
Password.displayName = "UiPassword";
export default Object.assign(UiInput, { Search, TextArea, Password, OTP: Input.OTP, Group: Input.Group });
