import React from "react";
import { CommonProps } from "@/models/types";
import TypographyH1 from "@/components/ui/TypographyH1";
import Box from "@/components/Box";



const BusinessViewPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Business View Page</TypographyH1>

        </Box>
    )
}

export default BusinessViewPage;