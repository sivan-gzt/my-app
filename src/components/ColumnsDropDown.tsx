import React from "react";
import { ColumnNames, ColumnType } from "@/models/types";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

type ColumnsDropDownProps = {
    columns: ColumnType["columns"];
    onColumnChange: (columnName: ColumnNames, checked: boolean) => void;
};

const ColumnsDropDown: React.FC<ColumnsDropDownProps> = ({ columns, onColumnChange }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Select Columns</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Business Columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.keys(columns).map((column) => (
                    <DropdownMenuCheckboxItem
                        checked={columns[column as keyof typeof columns]}
                        onCheckedChange={(checked) => onColumnChange(column as ColumnNames, checked)}
                    >
                        {column}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ColumnsDropDown;
