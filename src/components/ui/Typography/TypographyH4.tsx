import { CommonProps } from "@/types/types";
import React from "react";

const TypographyH4: React.FC<CommonProps> = ({ children }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export default TypographyH4;