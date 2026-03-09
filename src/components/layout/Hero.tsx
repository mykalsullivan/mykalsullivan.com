import React, {ReactNode} from "react";
import SectionContent from "./SectionContent";

type HeroProps =
{
    children: ReactNode;
    id?: string;
}

function Hero({children, id}: HeroProps): React.JSX.Element
{
    return (
        <section id={id}
            className="
                max-w-400
                mx-auto
                px-4
            "
        >
            <SectionContent>
                {children}
            </SectionContent>
        </section>
    );
}

export default Hero;