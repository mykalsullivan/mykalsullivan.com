import React from "react";

type TextSectionProps =
{
    children?: React.ReactNode;
}

function TextSection({children}: TextSectionProps)
{
    return <section className="max-w-225">{children}</section>;
}

export default TextSection;