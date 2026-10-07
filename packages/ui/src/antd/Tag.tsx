import { Tag } from "antd";
import type { TagProps, GetRef } from "antd";
import { forwardRef } from "react";
import { useUiIconSet } from "../icon-context";
import CloseIcon from "../material-icons/close";

const UiTag = forwardRef<GetRef<typeof Tag>, TagProps>((props, ref) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    // Ant Design treats closeIcon as enabling close, so only default it for opt-in tags.
    return <Tag {...props} ref={ref} closeIcon={material && props.closable && props.closeIcon === undefined
        ? <CloseIcon /> : props.closeIcon} />;
});
UiTag.displayName = "UiTag";
export default Object.assign(UiTag, { CheckableTag: Tag.CheckableTag, CheckableTagGroup: Tag.CheckableTagGroup });
