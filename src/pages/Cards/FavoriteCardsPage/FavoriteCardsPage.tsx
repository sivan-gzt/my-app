import React from "react";
import { CommonProps } from "@/models/types";
import TypographyH1 from "@/components/ui/TypographyH1";
import Box from "@/components/Box";



const FavoriteCardsPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Liked Cards</TypographyH1>

        </Box>
    )
}

export default FavoriteCardsPage;