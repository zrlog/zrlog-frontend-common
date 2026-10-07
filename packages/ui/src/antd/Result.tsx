import { Result } from "antd";
import type { ResultProps } from "antd";
import { useFeedbackIcons } from "../feedback-icons";

const UiResult = (props: ResultProps) => {
    const icons = useFeedbackIcons();
    return <Result {...props} icon={props.icon === undefined ? icons[props.status ?? "info"] : props.icon} />;
};
export default UiResult;
