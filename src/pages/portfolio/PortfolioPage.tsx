import React from "react";
import { Helmet } from "react-helmet";
import PortfolioHero from "./sections/PortfolioHero.tsx";
import PortfolioMain from "./sections/PortfolioMain.tsx";

function PortfolioPage(): React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Mykal Sullivan | Portfolio</title>
                <link rel={"icon"} href={"/assets/images/favicon.png"} />
            </Helmet>
            <PortfolioHero />
            <PortfolioMain />
        </>
    );
}

export default PortfolioPage;