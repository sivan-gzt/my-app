import React from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import Box from "@/components/ui/Box";



const FavoriteCardsPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Liked Cards</TypographyH1>

        </Box>
    )
}

export default FavoriteCardsPage;