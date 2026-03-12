import React from "react";

type SectionHeaderProps =
{
    title: string;
    description?: string;
}

function SectionHeader({title, description}: SectionHeaderProps): React.JSX.Element
{
    return (
        <header>
            <h1 className="text-xl mb-4">{title}</h1>
            {description && <h2 className="text-lg description">{description}</h2>}
        </header>
    );
}

export default SectionHeader;