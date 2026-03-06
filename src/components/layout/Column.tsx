import React from "react";

type ColumnProps =
{
    children: React.ReactNode;
    className?: string;
}

function Column({children, className}: ColumnProps): React.JSX.Element
{
    return (
        <div className={className} style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        }}>{children}</div>
    );
}

export default Column;