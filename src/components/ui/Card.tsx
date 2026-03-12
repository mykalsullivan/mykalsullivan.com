import React from "react";
import Surface from "./Surface";

type CardProps =
{
    children: React.ReactNode;
}

function Card({children}: CardProps): React.JSX.Element
{
    return (
        <Surface>
            <div>
                {children}
            </div>
        </Surface>
    );
}

export default Card;