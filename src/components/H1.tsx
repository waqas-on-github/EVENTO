import cn from "@/utils/cn";
import React from "react";

type TypeProps = {
    children: React.ReactNode;
    className?: string; // Make className prop optional
};

const H1 = ({ children, className }: TypeProps) => {
    return (
        <h1 className={cn("text-3xl font-bold tracking-tighter lg:text-6xl", className)}> {children}</h1>
    );
};

export default H1;
