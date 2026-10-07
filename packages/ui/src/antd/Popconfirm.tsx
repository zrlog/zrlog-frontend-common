import { forwardRef } from "react";
import { Popconfirm } from "antd";
import type { GetRef, PopconfirmProps } from "antd";
import { useFeedbackIcons } from "../feedback-icons";

const UiPopconfirm = forwardRef<GetRef<typeof Popconfirm>, PopconfirmProps>((props, ref) => {
    const icons = useFeedbackIcons();
    return <Popconfirm {...props} ref={ref} icon={props.icon === undefined ? icons.warning : props.icon} />;
});
UiPopconfirm.displayName = "UiPopconfirm";
export default UiPopconfirm;
