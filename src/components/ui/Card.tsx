import React from "react";

type CardProps =
{
    children: React.ReactNode;
}

function Card({children}: CardProps): React.JSX.Element
{
    return (
        <div className="
                w-full
                h-full
                border
                border-neutral-700
                rounded-xl
            "
        >
            {children}
        </div>
    );
}

export default Card;