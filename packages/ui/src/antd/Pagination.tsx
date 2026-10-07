import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { cloneElement, isValidElement } from "react";
import { useUiIconSet } from "../icon-context";
import ChevronLeftIcon from "../material-icons/chevron-left";
import ChevronRightIcon from "../material-icons/chevron-right";
import ChevronsLeftIcon from "../material-icons/chevrons-left";
import ChevronsRightIcon from "../material-icons/chevrons-right";

export const usePaginationIcons = (): PaginationProps["itemRender"] => {
    const material = useUiIconSet() === "material-symbols-rounded";
    return material ? (_, type, original) => {
        const icon = type === "prev" ? <ChevronLeftIcon /> : type === "next" ? <ChevronRightIcon />
            : type === "jump-prev" ? <ChevronsLeftIcon /> : type === "jump-next" ? <ChevronsRightIcon /> : undefined;
        return icon && isValidElement(original) ? cloneElement(original, undefined, icon) : original;
    } : undefined;
};
const UiPagination = (props: PaginationProps) => {
    const itemRender = usePaginationIcons();
    return <Pagination {...props} itemRender={props.itemRender ?? itemRender} />;
};
export default UiPagination;
