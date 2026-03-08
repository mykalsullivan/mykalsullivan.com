import React from "react";
import Container from "./Container";

type MainProps =
{
    children: React.ReactNode;
}

function Main({children}: MainProps)
{
    return (
        <main className="
                flex flex-col
                max-w-300
                mx-auto
            "
        >
            <Container>
                {children}
            </Container>
        </main>
    );
}

export default Main;