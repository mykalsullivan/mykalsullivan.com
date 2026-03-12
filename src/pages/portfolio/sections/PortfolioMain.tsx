import React from "react";
import PortfolioHero from "./PortfolioHero";
import PortfolioSummarySection from "./PortfolioSummarySection";
import PortfolioSkillsSection from "./PortfolioSkillsSection";
import PortfolioProjectsSection from "./PortfolioProjectsSection";
import PortfolioCertificationsSection from "./PortfolioCertificationsSection";
import PortfolioConnectSection from "./PortfolioConnectSection";

function PortfolioMain(): React.JSX.Element
{
    return (
        <main>
            <PortfolioHero />
            <PortfolioSummarySection />
            <PortfolioSkillsSection />
            <PortfolioProjectsSection />
            <PortfolioCertificationsSection />
            <PortfolioConnectSection />
        </main>
    );
}

export default PortfolioMain;