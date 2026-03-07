import React from "react";

type RowProps =
{
    children: React.ReactNode;
}

function Row({children}: RowProps): React.JSX.Element
{
    return (
        <div className="flex flex-row justify-between items-center gap-4">
            {children}
        </div>
    );
}

export default Row;