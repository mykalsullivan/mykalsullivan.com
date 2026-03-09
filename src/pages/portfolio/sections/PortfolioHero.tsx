import React from "react";
import Hero from "../../../components/layout/Hero";
import Box from "../../../components/layout/Box";
import Row from "../../../components/layout/Row";
import Column from "../../../components/layout/Column";
import Image from "../../../components/ui/Image";

function PortfolioHero(): React.JSX.Element
{
    return (
        <Hero id={""}>
            <Box minHeight="90vh">
                <Column justify="center" items="center">
                    <Row>
                        <Column justify="center" items="start">
                            <h1 className="text-7xl">I am Mykal Sullivan.</h1>
                            <p className="text-lg">
                                A dedicated systems software engineer, infrastructure
                                professional, and vintage tech enthusiast.
                            </p>
                            <Row justify="start">
                                <p>Penis</p>
                                <p>Balls</p>
                            </Row>
                        </Column>
                        <Column justify="center" items="end" wrap>
                            <Box width={500} minWidth={500}>
                                <Image src="/assets/images/mykal_sullivan.jpg" alt="Mykal Sullivan portrait" />
                            </Box>
                        </Column>
                    </Row>
                </Column>
            </Box>
        </Hero>
    );
}

export default PortfolioHero;