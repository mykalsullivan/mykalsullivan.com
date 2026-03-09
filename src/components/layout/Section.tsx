import React from "react";
import SectionContent from "./SectionContent";

type SectionProps =
{
    children: React.ReactNode;
    id?: string;
}

function Section({children, id}: SectionProps): React.JSX.Element
{
    return (
        <section id={id}
            className="
                max-w-350
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

export default Section;