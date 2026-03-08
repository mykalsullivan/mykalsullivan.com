import React from "react";
import Section from "../../../components/layout/Section.tsx";

function PortfolioAboutSection(): React.JSX.Element
{
    return (
        <>
            <Section>
                <h1 className="text-4xl">About</h1>
                <p>This is like, me, and stuff.</p>
            </Section>
        </>
    );
}

export default PortfolioAboutSection;