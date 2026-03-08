import React from "react";

type GridProps =
{
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    rows?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 2 | 4 | 6 | 8;
    justify?: "start" | "center" | "end" | "between" | "evenly";
    align?: "start" | "center" | "end" | "stretch";
};

const colsMap: Record<number, string> =
{
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
};

const rowsMap: Record<number, string> =
{
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6",
};

const gapMap: Record<number, string> =
{
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
};

const justifyMap: Record<string, string> =
{
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    evenly: "justify-evenly",
};

const alignMap: Record<string, string> =
{
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
};

function Grid(
{
    children,
    cols = 1,
    rows,
    gap = 4,
    justify = "start",
    align = "stretch",
}: GridProps): React.JSX.Element {
    return (
        <div
            className={`
                w-full
                mx-auto
                grid
                ${colsMap[cols]}
                ${rows ? rowsMap[rows] : ""}
                ${gapMap[gap]}
                ${justifyMap[justify]}
                ${alignMap[align]}
            `}
        >
            {children}
        </div>
    );
}

export default Grid;