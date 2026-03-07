import React from "react";

type CardProps =
{
    children: React.ReactNode;
}

function Card({children}: CardProps): React.JSX.Element
{
    return (
        <div className="
            border
            border-neutral-700
            rounded-xl
            h-full
            w-full
        ">
            {children}
        </div>
    );
}

export default Card;