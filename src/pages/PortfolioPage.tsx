import React from "react";
import Main from "../components/layout/Main";
import PortfolioHero from "../features/portfolio/PortfolioHero.tsx";
import PortfolioSummary from "../features/portfolio/PortfolioSummary.tsx";
import PortfolioSkills from "../features/portfolio/PortfolioSkills.tsx";
import PortfolioAbout from "../features/portfolio/PortfolioAbout.tsx";
import PortfolioContact from "../features/portfolio/PortfolioContact.tsx";
import Divider from "../components/ui/Divider.tsx";

function PortfolioPage(): React.JSX.Element
{
    return (
        <>
            <PortfolioHero />
            <Main>
                <div id="summary"><PortfolioSummary /></div>
                <Divider />
                <div id="skills"><PortfolioSkills /></div>
                <Divider />
                <div id="about"><PortfolioAbout /></div>
                <Divider />
                <div id="contact"><PortfolioContact /></div>
            </Main>
        </>
    );
}

export default PortfolioPage;