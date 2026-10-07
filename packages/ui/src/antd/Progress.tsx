import { Progress } from "antd";
import type { ProgressProps } from "antd";
import { useUiIconSet } from "../icon-context";
import SuccessIcon from "../material-icons/success";
import ErrorIcon from "../material-icons/error";
import CheckIcon from "../material-icons/check";
import CloseIcon from "../material-icons/close";

const UiProgress = (props: ProgressProps) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const circular = props.type === "circle" || props.type === "dashboard";
    const format: ProgressProps["format"] = (percent) => {
        if (props.status === "exception") return circular ? <CloseIcon /> : <ErrorIcon selected />;
        if (props.status === "success" || (percent === 100 && props.status !== "active")) {
            return circular ? <CheckIcon /> : <SuccessIcon selected />;
        }
        return `${percent}%`;
    };
    return <Progress {...props} format={props.format ?? (material ? format : undefined)} />;
};
export default UiProgress;
