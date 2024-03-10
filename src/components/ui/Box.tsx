import React from 'react';
import { cn } from "@/lib/utils";
import { CommonProps } from "@/types/types";


const Box: React.FC<CommonProps> = ({ children, className }) => {
    { console.log(children) }
    return (
        <div className={cn("container mx-auto px-4", className)} >
            {children}
        </div>
    );
};

export default Box;