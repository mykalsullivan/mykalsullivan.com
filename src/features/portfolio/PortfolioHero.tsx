import React from "react";
import Hero from "../../components/layout/Hero.tsx";
import Row from "../../components/layout/Row.tsx";
import Column from "../../components/layout/Column.tsx";
import Icon from "../../components/ui/Icon.tsx";

function PortfolioHero(): React.JSX.Element
{
    return (
        <div className="pb-10">
            <Hero>
                <div className="
                    p-4
                    h-100
                ">
                    <Row>
                        <div className="min-h-100">
                            <Column>
                                <h1 className="text-5xl">I am Mykal Sullivan.</h1>
                                <div className="py-1" />
                                <h4 className="text-2xl">Systems software engineer and infrastructure professional.</h4>
                            </Column>
                        </div>
                        <div className="max-w-100">
                            <Icon src="/assets/images/mykal_sullivan.jpg" alt="Mykal sipping coffee or something" />
                        </div>
                    </Row>
                </div>
            </Hero>
        </div>
    );
}

export default PortfolioHero;