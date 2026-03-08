import React from "react";
import Section from "../../../components/layout/Section.tsx";

function PortfolioSummarySection(): React.JSX.Element
{
    return (
        <Section id="summary">
            <h1 className="text-4xl">Summary</h1>
            <p>I'm like a cool dude and stuff.</p>
        </Section>
    );
}

export default PortfolioSummarySection;