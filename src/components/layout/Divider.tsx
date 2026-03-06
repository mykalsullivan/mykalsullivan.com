import React from "react";

type DividerProps =
{
    thickness?: number;
    color?: string;
    margin?: string;
}

function Divider({thickness = 1,
                 color = "grey",
                 margin = "8px 0"}: DividerProps)
{
    return (
        <hr style={
        {
            border: "none",
            height: thickness,
            backgroundColor: color,
            margin: margin
        }}/>
    );
}

export default Divider;