import React from "react";
import Section from "../../components/layout/Section.tsx";

function PortfolioSummary(): React.JSX.Element
{
    return (
        <div className="pb-40 mx-4 mb-4">
            <Section>
                <h1 className="text-4xl">Summary</h1>
                <p>I'm like a cool dude and stuff.</p>
            </Section>
        </div>
    );
}

export default PortfolioSummary;