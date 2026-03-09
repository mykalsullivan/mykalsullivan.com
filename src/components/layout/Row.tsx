import React from "react";
import {FlexProps, justifyMap, alignMap, itemsMap, gapMap} from "./FlexTypes";

function Row(
{
    children,
    justify = "between",
    align = "center",
    items = "center",
    gap = 4,
    wrap = false,
    overflow = false
}: FlexProps): React.JSX.Element
{
    const wrapString: string = wrap ? "flex-wrap" : "";
    const overflowString: string = overflow ? "overflow-x-auto" : "";

    return (
        <div className={`
            w-full
            h-full
            flex
            flex-row
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

export default Row;