import React from "react";
import { CommonProps } from "@/models/types";
import TypographyH1 from "@/components/ui/TypographyH1";
import TypographyH2 from "@/components/ui/TypographyH2";
import Box from "@/components/Box";



const ErrorPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box className="text-center">
            <TypographyH1>404!</TypographyH1>
            <TypographyH2>Page not found!</TypographyH2>
        </Box>
    )
}

export default ErrorPage;