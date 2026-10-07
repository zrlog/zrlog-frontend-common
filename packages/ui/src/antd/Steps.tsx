import { Steps } from "antd";
import type { StepsProps } from "antd";
import { useUiIconSet } from "../icon-context";
import CheckIcon from "../material-icons/check";
import CloseIcon from "../material-icons/close";

const UiSteps = (props: StepsProps) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const iconRender: StepsProps["iconRender"] = (node, info) => {
        if (info.item.icon !== undefined || props.progressDot || props.type === "dot" || props.type === "inline") return node;
        const Icon = info.components.Icon;
        if (info.item.status === "finish") return <Icon><CheckIcon /></Icon>;
        if (info.item.status === "error") return <Icon><CloseIcon /></Icon>;
        return node;
    };
    return <Steps {...props} iconRender={props.iconRender ?? (material ? iconRender : undefined)} />;
};
export default UiSteps;
