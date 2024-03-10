import { CommonProps } from "@/models/types";
import React from "react";

const TypographySmall: React.FC<CommonProps> = ({ children }) => {
    return (
        <small className="text-sm font-medium leading-none">
            {children}
        </small>
    )
}

export default TypographySmall;