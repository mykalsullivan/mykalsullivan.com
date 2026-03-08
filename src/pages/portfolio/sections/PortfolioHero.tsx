import React from "react";
import Hero from "../../../components/layout/Hero";
import Flex from "../../../components/layout/Flex.tsx";
import Image from "../../../components/ui/Image";

function PortfolioHero(): React.JSX.Element
{
    return (
        <Hero id={""}>
            <Flex>
                <Flex type="col" align="start">
                    <h1 className="text-6xl">I am Mykal Sullivan.</h1>
                    <h2 className="text-xl">Systems software engineer and infrastructure professional.</h2>
                </Flex>
                <Flex type="col" align="end">
                    <Image src="/assets/images/mykal_sullivan.jpg" alt="Mykal Sullivan" />
                </Flex>
            </Flex>
        </Hero>
    );
}

export default PortfolioHero;