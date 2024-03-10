import { CommonProps } from "@/types/types";
import React from "react";

const TypographyH1: React.FC<CommonProps> = ({ children }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export default TypographyH1;