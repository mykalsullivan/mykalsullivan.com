import React, {ReactNode} from "react";

type HeroProps =
{
    children: ReactNode;
}

function Hero({children}: HeroProps): React.JSX.Element
{
    return (
        <section className="
            flex flex-col
            max-w-350
            mx-auto"
        >
            {children}
        </section>
    );
}

export default Hero;