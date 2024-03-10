import React from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import Box from "@/components/ui/Box";



const BusinessViewPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Business View Page</TypographyH1>

        </Box>
    )
}

export default BusinessViewPage;