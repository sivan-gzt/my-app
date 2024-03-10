import { CommonProps } from "@/models/types";
import React from "react";

const TypographyP: React.FC<CommonProps> = ({ children }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}

export default TypographyP;