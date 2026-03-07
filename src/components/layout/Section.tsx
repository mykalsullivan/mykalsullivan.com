import React from "react";

type SectionProps =
{
    children?: React.ReactNode;
}

function Section({children}: SectionProps)
{
    return <section className="
        mb-12
        px-4
        py-8
        first:p-4"
    >
        {children}
    </section>;
}

export default Section;