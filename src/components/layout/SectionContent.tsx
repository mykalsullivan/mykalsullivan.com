import React from "react";

type SectionContentProps =
{
    children: React.ReactNode;
}

function SectionContent({children}: SectionContentProps)
{
    return (
        <div className="py-20">
            {children}
        </div>
    );
}

export default SectionContent;