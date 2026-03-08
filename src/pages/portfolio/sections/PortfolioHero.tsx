import React from "react";
import Hero from "../../../components/layout/Hero";
import Row from "../../../components/layout/Row";
import Column from "../../../components/layout/Column";
import Image from "../../../components/ui/Image";

function PortfolioHero(): React.JSX.Element
{
    return (
        <Hero id={""}>
            <Row>
                <Column align="start">
                    <h1 className="text-6xl">I am Mykal Sullivan.</h1>
                    <h2 className="text-xl">Systems software engineer and infrastructure professional.</h2>
                </Column>
                <Column align="end">
                    <Image src="/assets/images/mykal_sullivan.jpg" alt="Mykal Sullivan" />
                </Column>
            </Row>
        </Hero>
    );
}

export default PortfolioHero;