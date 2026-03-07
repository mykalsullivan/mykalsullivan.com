import React from "react";

type MainProps =
{
    children?: React.ReactNode;
}

function Main({children}: MainProps)
{
    return <main className="
        flex flex-col
        max-w-300
        mx-auto"
    >
        {children}
    </main>;
}

export default Main;