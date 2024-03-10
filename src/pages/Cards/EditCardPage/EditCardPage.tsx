import React from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import Box from "@/components/ui/Box";



const EditCardsPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Edit Your Card</TypographyH1>

        </Box>
    )
}

export default EditCardsPage;