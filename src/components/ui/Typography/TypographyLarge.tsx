import { CommonProps } from "@/types/types";
import React from "react";

const TypographyLarge: React.FC<CommonProps> = ({ children }) => {
    return (
        <div className="text-lg font-semibold">
            {children}
        </div>
    )
}

export default TypographyLarge;