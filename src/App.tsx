import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/ui/Header.tsx";
import Footer from "./components/ui/Footer.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";

function App() : React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Mykal Sullivan</title>
                <link rel={"icon"} href={"/assets/images/favicon.png"} />
            </Helmet>
            <Header />
            <PortfolioPage />
            <Footer />
        </>
    );
}

export default App;