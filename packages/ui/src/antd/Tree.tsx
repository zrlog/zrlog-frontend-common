import { Tree } from "antd";
import type { TreeProps, GetRef } from "antd";
import { forwardRef } from "react";
import { useUiIconSet } from "../icon-context";
import ChevronDownIcon from "../material-icons/chevron-down";
import LoadingIcon from "../material-icons/loading";

const UiTree = forwardRef<GetRef<typeof Tree>, TreeProps>((props, ref) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    return <Tree {...props} ref={ref}
        switcherIcon={props.switcherIcon === undefined && material ? <ChevronDownIcon /> : props.switcherIcon}
        switcherLoadingIcon={props.switcherLoadingIcon === undefined && material ? <LoadingIcon /> : props.switcherLoadingIcon} />;
});
UiTree.displayName = "UiTree";
export default UiTree;
