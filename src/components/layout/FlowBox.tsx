import React from "react";

type FlowBoxProps =
{
    children: React.JSX.Element[];
    direction?: "row" | "col";
    gap?: string;
    className?: string;
}

function FlowBox(
{
    children,
    direction = "row",
    gap = "4",
    className = "",
}: FlowBoxProps): React.JSX.Element
{
    return (
        <div className={`flex flex-${direction} gap-${gap} ${className}`}>
            {children}
        </div>
    );
}

export default FlowBox;