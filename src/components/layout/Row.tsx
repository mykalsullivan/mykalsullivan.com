import React from "react";

type RowProps =
{
    children: React.ReactNode;
    className?: string;
}

function Row({children, className}: RowProps): React.JSX.Element
{
    return (
        <div className={className} style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            gap: "1rem"
        }}>{children}</div>
    );
}

export default Row;