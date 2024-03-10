import React, { useEffect, useState } from "react";
import { BusinessColumnsBoolean, ColumnNames, CommonProps } from "@/models/types";
import TypographyH1 from "@/components/ui/TypographyH1";
import Box from "@/components/Box";
import { getCards } from "@/services/cardsApiService"
import { BusinessColumns, IBusiness } from "@/models/BusinessModel";
import CardsTable from "@/components/CardsTable";
import ColumnsDropDown from "@/components/ColumnsDropDown";


const CardsPage = () => {

    const initialColumns: BusinessColumnsBoolean =
    {
        subtitle: true,
        title: true,
        description: true,
        phone: true,
        email: true,
        web: true,
        bizNumber: true,
        likes: true,
        createdAt: true,
    }


    const [cards, setCards] = useState<IBusiness[]>([]);
    const [columns, setColumns] = useState<BusinessColumnsBoolean>(initialColumns);


    const fetchCards = async () => {
        try {
            const promiseCards: IBusiness[] = await getCards();
            setCards(promiseCards);
        } catch (error: any) {
            console.error("Error fetching cards:", error);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);


    const handleColumnChange = (columnName: ColumnNames, checked: boolean) => {
        setColumns((prevColumns) => ({
            ...prevColumns,
            [columnName]: checked
        }));
    };

    return (
        <Box className="w-dvw">
            <Box className="flex flex-row justify-between">
                <TypographyH1>All Cards</TypographyH1>
                <ColumnsDropDown columns={columns} onColumnChange={handleColumnChange} />
            </Box>
            <CardsTable cards={cards} columns={columns} />
        </Box>
    )
}

export default CardsPage;
