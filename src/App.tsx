import React from "react";
import "./Reset.module.css";
import "./Global.module.css";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header.tsx";
import Main from "./components/layout/Main.tsx";
import Footer from "./components/layout/Footer.tsx";

function App() : React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Chameleon Engine</title>
                <link rel={"icon"} href={"/Assets/Images/favicon.png"} />
            </Helmet>
            <Header />
            <Main>
                <></>
            </Main>
            <Footer />
        </>
    );
}

export default App;