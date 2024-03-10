import React, { useEffect, useState } from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import Box from "@/components/ui/Box";
import { getCards } from "@/cards/utils/cardsApiService"
import { ICard } from "@/cards/models/CardModel";

const CardsPage: React.FC<CommonProps> = ({ children }) => {

    const [cards, setCards] = useState<ICard[]>([]);

    const allCards = async () => {
        const promiseCards: ICard[] = await getCards();
        console.log(promiseCards);
        setCards(promiseCards);
        return;
    }

    useEffect(() => { allCards() }, []);



    return (
        <Box>
            <TypographyH1>All Cards</TypographyH1>
            {cards.map((card) => {
                return (
                    <>
                        <div>{card.title}</div>
                        <img src={card.image.url} alt={card.image.alt} />
                    </>
                )
            })}
        </Box>
    )
}

export default CardsPage;