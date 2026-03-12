import React from "react";
import Hero from "../../../components/layout/Hero";
import Box from "../../../components/layout/Box";
import Container from "../../../components/layout/Container";
import Row from "../../../components/layout/Row";
import Column from "../../../components/layout/Column";
import Image from "../../../components/ui/Image";
import Card from "../../../components/ui/Card";

function DownloadResumeCVCard(): React.JSX.Element
{
    return (
        <Box>
            <a className="no-underline" href="/resume.pdf" download>
                <Card>
                    <Container>
                        <p>Resume / CV</p>
                    </Container>
                </Card>
            </a>
        </Box>
    );
}

function LocationCard(): React.JSX.Element
{
    return (
        <Box>
            <Container>
                <p>Seattle, WA</p>
            </Container>
        </Box>
    );
}

function ProfilePicture(): React.JSX.Element
{
    return (
        <Box width={500} minWidth={500}>
            <Card>
                <Container>
                    <Image src="/assets/images/ms_portrait.jpg" alt="Mykal Sullivan portrait" />
                </Container>
            </Card>
        </Box>
    );
}

function LeftSide(): React.ReactElement
{
    return (
        <Column justify="center" items="start" gap={8}>
            <Column gap={2}>
                <h1 className="font-game text-7xl">I am Mykal Sullivan.</h1>
                <p className="text-lg">
                    A dedicated systems software engineer, infrastructure
                    professional, and vintage tech enthusiast.
                </p>
            </Column>
            <Column gap={8}>
                <Row justify="start">
                    <Column gap={2}>
                        <p className="text-5xl font-bold">5+ years</p>
                        <p className="text-xl">Programming experience</p>
                    </Column>
                    <Column gap={2}>
                        <p className="text-5xl font-bold">7+ years</p>
                        <p className="text-xl">Infrastructure experience</p>
                    </Column>
                </Row>
                <Row justify="start">
                    <DownloadResumeCVCard />
                    <LocationCard />
                </Row>
            </Column>
        </Column>
    );
}

function RightSide(): React.JSX.Element
{
    return (
        <Column justify="center" items="end" wrap>
            <ProfilePicture />
        </Column>
    );
}

function PortfolioHero(): React.JSX.Element
{
    return (
        <div className="
            bg-linear-to-b
            from-gray-600/20
            to-transparent
        ">
            <Hero id={""}>
                <Box>
                    <Column justify="center" items="center">
                        <Row>
                            <LeftSide />
                            <RightSide />
                        </Row>
                    </Column>
                </Box>
            </Hero>
        </div>
    );
}

export default PortfolioHero;