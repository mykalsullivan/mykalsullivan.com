import React from "react";

type FlexProps =
{
    children: React.ReactNode;
    type?: "row" | "col" | "wrap";
    justify?: "between" | "center" | "evenly";
    align?: "start" | "center" | "end";
    gap?: number;
}

const typeMap: any = Object.freeze(
{
    row: "flex-row",
    col: "flex-col",
    wrap: "flex-wrap"
});

const justifyMap: any = Object.freeze(
{
    between: "justify-between",
    center: "justify-center",
    evenly: "justify-evenly"
});

const alignMap: any = Object.freeze(
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

function Flex(
{
    children,
    type = "row",
    justify = "between",
    align = "center",
    gap = 4
}: FlexProps): React.JSX.Element
{

    return (
        <div className={`
            w-full
            mx-auto
            flex
            ${typeMap[type]}
            ${justifyMap[justify]}
            ${alignMap[align]}
            ${gapMap[gap]}
        `}>
            {children}
        </div>
    );
}

export default Flex;