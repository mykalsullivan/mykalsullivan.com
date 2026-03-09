import React from "react";
import Main from "../../../components/layout/Main";
import PortfolioHero from "./PortfolioHero";
import PortfolioSkillsSection from "./PortfolioSkillsSection";
import PortfolioCertificationsSection from "./PortfolioCertificationsSection";
import PortfolioProjectsSection from "./PortfolioProjectsSection";
import PortfolioConnectSection from "./PortfolioConnectSection";

function PortfolioMain(): React.JSX.Element
{
    return (
        <Main>
            <PortfolioHero />
            <PortfolioSkillsSection />
            <PortfolioCertificationsSection />
            <PortfolioProjectsSection />
            <PortfolioConnectSection />
        </Main>
    );
}

export default PortfolioMain;