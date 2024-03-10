import React from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import TypographyH2 from "@/components/ui/Typography/TypographyH2";
import Box from "@/components/ui/Box";



const ErrorPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box className="text-center">
            <TypographyH1>404!</TypographyH1>
            <TypographyH2>Page not found!</TypographyH2>
        </Box>
    )
}

export default ErrorPage;