import React from "react";

type ContainerProps =
{
    children: React.ReactNode;
}

function Container({children}: ContainerProps): React.JSX.Element
{
    return (
        <div className="
            mx-auto
            p-2
        ">
            {children}
        </div>
    );
}

export default Container;