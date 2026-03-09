import React from "react";
import {Helmet} from "react-helmet";
import AboutMain from "./sections/AboutMain";

function AboutPage(): React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Mykal Sullivan | About</title>
                <link rel={"icon"} href={"/assets/images/icons/favicon.png"} />
            </Helmet>
            <AboutMain />
        </>
    );
}

export default AboutPage;