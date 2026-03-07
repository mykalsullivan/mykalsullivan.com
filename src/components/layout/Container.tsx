import React from "react";

type ContainerProps =
{
    children: React.ReactNode;
}

function Container({children}: ContainerProps): React.JSX.Element
{
    return (
        <div className="max-w-6xl mx-auto px-4">
            {children}
        </div>
    );
}

export default Container;