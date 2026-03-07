import React from "react";
import Section from "../../components/layout/Section";
import FlowBox from "../../components/layout/FlowBox";
import Card from "../../components/ui/Card";

function PortfolioSkills(): React.JSX.Element
{
    return (
        <div className="pb-40 mx-4 mb-4">
            <Section>
                <h1 className="text-4xl">Skills</h1>
                <p>I can like, do stuff, and stuff.</p>
                <FlowBox direction="row" gap="4">
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                    <Card>
                        <h1>Penis</h1>
                        <p>Dick</p>
                    </Card>
                </FlowBox>
            </Section>
        </div>
    );
}

export default PortfolioSkills;