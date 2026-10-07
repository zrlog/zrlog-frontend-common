import { Table, theme } from "antd";
import type { TableProps } from "antd";
import { forwardRef } from "react";
import type { ComponentRef } from "react";
import { useUiIconSet } from "../icon-context";
import { usePaginationIcons } from "./Pagination";
import ChevronDownIcon from "../material-icons/chevron-down";
import FilterIcon from "../material-icons/filter";

const UiTable = forwardRef<ComponentRef<typeof Table>, TableProps>((props, ref) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const itemRender = usePaginationIcons();
    const { token } = theme.useToken();
    const mapColumns = (columns: TableProps["columns"]): TableProps["columns"] => columns?.map((column) => {
        if ("children" in column) return { ...column, children: mapColumns(column.children)! };
        return { ...column,
            ...((column.filters || column.filterDropdown) && column.filterIcon === undefined ? {
                filterIcon: (filtered: boolean) => <FilterIcon selected={filtered} />,
            } : {}),
            ...(column.sorter && !column.sortIcon ? { sortIcon: ({ sortOrder }) => <span style={{ display: "inline-flex", flexDirection: "column", marginInlineStart: token.marginXXS }}>
            <ChevronDownIcon rotate={180} style={{ color: sortOrder === "ascend" ? token.colorPrimary : token.colorTextDisabled, fontSize: 12 }} />
            <ChevronDownIcon style={{ color: sortOrder === "descend" ? token.colorPrimary : token.colorTextDisabled, fontSize: 12 }} />
        </span> } : {}),
        };
    });
    const pagination = props.pagination === false || !material ? props.pagination : { itemRender, ...props.pagination };
    return <Table {...props} ref={ref} columns={material ? mapColumns(props.columns) : props.columns} pagination={pagination} />;
});
UiTable.displayName = "UiTable";
export default Object.assign(UiTable, {
    Column: Table.Column, ColumnGroup: Table.ColumnGroup, Summary: Table.Summary,
    SELECTION_COLUMN: Table.SELECTION_COLUMN, EXPAND_COLUMN: Table.EXPAND_COLUMN,
    SELECTION_ALL: Table.SELECTION_ALL, SELECTION_INVERT: Table.SELECTION_INVERT, SELECTION_NONE: Table.SELECTION_NONE,
}) as typeof Table;
