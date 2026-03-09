import React from "react";
import {FlexProps, justifyMap, alignMap, itemsMap, gapMap} from "./FlexTypes.tsx";

function Column(
{
    children,
    justify = "between",
    align = "center",
    items = "start",
    gap = 4,
    wrap = false,
    overflow = false
}: FlexProps): React.JSX.Element
{
    const wrapString: string = wrap ? "flex-wrap" : "";
    const overflowString: string = overflow ? "overflow-y-auto" : "";

    return (
        <div className={`
            w-full
            h-full
            flex
            flex-col
            ${justifyMap[justify]}
            ${alignMap[align]}
            ${itemsMap[items]}
            ${gapMap[gap]}
            ${wrapString}
            ${overflowString}
        `}>
            {children}
        </div>
    );
}

export default Column;