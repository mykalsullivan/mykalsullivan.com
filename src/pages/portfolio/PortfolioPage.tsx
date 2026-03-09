import React from "react";
import {Helmet} from "react-helmet";
import PortfolioMain from "./sections/PortfolioMain.tsx";

function PortfolioPage(): React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Mykal Sullivan | Portfolio</title>
                <link rel={"icon"} href={"/assets/images/icons/favicon.png"} />
            </Helmet>
            <PortfolioMain />
        </>
    );
}

export default PortfolioPage;