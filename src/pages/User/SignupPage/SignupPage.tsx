import React from "react";
import { CommonProps } from "@/types/types";
import TypographyH1 from "@/components/ui/Typography/TypographyH1";
import Box from "@/components/ui/Box";



const SignupPage: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box>
            <TypographyH1>Signup To Create Your Account</TypographyH1>

        </Box>
    )
}

export default SignupPage;