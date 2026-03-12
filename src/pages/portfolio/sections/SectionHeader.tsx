import React from "react";
import Column from "../../../components/layout/Column.tsx";

type PortfolioSectionHeaderProps =
{
    title: string;
    description?: string;
}

function SectionHeader({title, description}: PortfolioSectionHeaderProps): React.JSX.Element
{
    return (
        <Column justify="start" align="end">
            <h1 className="text-6xl mb-4">{title}</h1>
            {description && <p className="text-xl">{description}</p>}
            <div className="mb-8" />
        </Column>
    );
}

export default SectionHeader;
