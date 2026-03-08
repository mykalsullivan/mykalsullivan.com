import React from "react";

type RowProps =
{
    children: React.ReactNode;
    justify?: "between" | "center" | "evenly";
    align?: "start" | "center" | "end";
    gap?: number;
}

const justifyMap = Object.freeze(
{
    between: "justify-between",
    center: "justify-center",
    evenly: "justify-evenly"
});

const alignMap = Object.freeze(
{
    start: "items-start",
    center: "items-center",
    end: "items-end"
});

const gapMap: Record<number, string> =
{
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8"
};

function Row({children, justify = "between", align = "center", gap = 4}: RowProps): React.JSX.Element
{
    return (
        <div className={`flex flex-row w-full ${justifyMap[justify]} ${alignMap[align]} ${gapMap[gap]}`}>
            {children}
        </div>
    );
}

export default Row;