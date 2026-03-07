import React from "react";
import Section from "../../components/layout/Section.tsx";

function PortfolioAbout(): React.JSX.Element
{
    return (
        <div className="pb-40 mx-4 mb-4">
            <Section>
                <h1 className="text-4xl">About</h1>
                <p>This is like, me, and stuff.</p>
            </Section>
        </div>
    );
}

export default PortfolioAbout;