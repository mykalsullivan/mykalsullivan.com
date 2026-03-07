import React from "react";

type ColumnProps =
{
    children: React.ReactNode;
}

function Column({children}: ColumnProps): React.JSX.Element
{
    return (
        <div className="flex flex-col justify-between">
            {children}
        </div>
    );
}

export default Column;