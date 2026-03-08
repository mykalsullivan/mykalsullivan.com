import React, {ReactNode} from "react";
import Container from "./Container";

type HeroProps =
{
    children: ReactNode;
    id?: string;
}

function Hero({children, id}: HeroProps): React.JSX.Element
{
    return (
        <div id={id}
             className="
                flex flex-col
                max-w-350
                mx-auto
            "
        >
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default Hero;