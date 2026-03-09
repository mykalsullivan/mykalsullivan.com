import React from "react";
import Section from "../../../components/layout/Section";
import Column from "../../../components/layout/Column";

type PortfolioSectionProps =
{
    id: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

function PortfolioSection(
{
    id,
    title = "Section title placeholder",
    description,
    children
}: PortfolioSectionProps): React.JSX.Element
{
    return (
        <Section id={id}>
            <Column justify="start" align="end">
                <h1 className="text-5xl">{title}</h1>
                {description && <p className="text-xl">{description}</p>}
            </Column>
            <div className="mb-2" />
            {children}
        </Section>
    );
}

export default PortfolioSection;