import { CommonProps } from "@/types/types";
import React from "react";

const TypographyMuted: React.FC<CommonProps> = ({ children }) => {
    return (
        <p className="text-sm text-muted-foreground">
            {children}
        </p>
    )
}

export default TypographyMuted;