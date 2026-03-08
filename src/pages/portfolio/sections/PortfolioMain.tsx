import React from "react";
import Main from "../../../components/layout/Main.tsx";
import PortfolioSummarySection from "./PortfolioSummarySection.tsx";
import PortfolioSkillsSection from "./PortfolioSkillsSection.tsx";
import PortfolioConnectSection from "./PortfolioConnectSection.tsx";
import Divider from "../../../components/ui/Divider.tsx";

function PortfolioMain(): React.JSX.Element
{
    return (
        <Main>
            <PortfolioSummarySection />
            <Divider />
            <PortfolioSkillsSection />
            <Divider />
            <PortfolioConnectSection />
        </Main>
    );
}

export default PortfolioMain;