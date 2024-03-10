import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table";
import { BusinessColumns, IBusiness } from "@/models/BusinessModel";
import { Address, Image } from "@/models/CommonModels"
import Box from "./Box";
import { BusinessColumnsBoolean } from "@/models/types";

interface CardsTableProps {
    cards: IBusiness[];
    columns: BusinessColumnsBoolean;
}

const CardsTable: React.FC<CardsTableProps> = ({ cards, columns }) => {

    const renderCellData = (data: any): React.ReactNode => {
        // Check if the data is an object and stringify it
        if (typeof data === "object" && data !== null) {
            return JSON.stringify(data);
        }
        // Convert the data to a string
        return String(data);
    };

    return (
        <Box className="">
            <Table>
                <TableCaption>A list of the registered businesses</TableCaption>
                <TableHeader>
                    <TableRow>
                        {Object.entries(columns).map(([column, isVisible]) => {
                            if (isVisible) {
                                const columnName = column as keyof BusinessColumns;
                                return (
                                    <TableHead key={columnName}>{columnName}</TableHead>
                                )
                            }
                            return null;

                        }
                        )}

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cards.map((card: IBusiness, index) => (
                        <TableRow key={index}>
                            {Object.entries(columns).map(([column, isVisible]) => {
                                if (isVisible) {
                                    const columnName = column as keyof BusinessColumns;
                                    return (
                                        <TableCell key={column}>{renderCellData(card[columnName])}</TableCell>
                                    );
                                }
                                return null;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default CardsTable;
