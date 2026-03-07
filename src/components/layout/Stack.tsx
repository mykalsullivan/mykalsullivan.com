import React from "react";

type StackProps =
{
    children: React.ReactNode;
    gap?: string;
}

function Stack({children, gap = "gap-4"}: StackProps): React.JSX.Element
{
    return (
        <div className={`flex flex-col ${gap}`}>
            {children}
        </div>
    );
}

export default Stack;