import React, { HTMLAttributes } from 'react';
import { cn } from "@/lib/utils";
import { CommonProps } from "@/models/types";


const Box: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    return (
        <div className={cn("container px-4 mx-1", className)} {...rest}>
            {children}
        </div>
    );
};

export default Box;