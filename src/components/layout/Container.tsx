import React from "react";

type ContainerProps =
{
    children: React.ReactNode;
}

function Container({children}: ContainerProps): React.JSX.Element
{
    return (
        <div className={`
            w-full
            mx-auto
            p-4
        `}>
            {children}
        </div>
    );
}

export default Container;