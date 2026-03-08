import React from "react";
import Container from "./Container";

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
                max-w-auto
                mx-4
                mt-2
                mb-4
            "
        >
            <Container>
                {children}
            </Container>
        </section>
    );
}

export default Section;