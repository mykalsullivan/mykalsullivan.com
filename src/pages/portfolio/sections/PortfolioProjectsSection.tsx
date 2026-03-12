import React from "react";
import Section from "../../../components/layout/Section";
import SectionHeader from "./SectionHeader.tsx";
import Row from "../../../components/layout/Row";
import Column from "../../../components/layout/Column";
import Box from "../../../components/layout/Box";
import Container from "../../../components/layout/Container";
import Card from "../../../components/ui/Card";
import Divider from "../../../components/layout/Divider.tsx";

type ProjectCardProps =
{
    title: string;
    description: string;
    link?: string;
    skillsUsed: string | string[];
}

function ProjectCard({title, description, link, skillsUsed = []}: ProjectCardProps): React.JSX.Element
{
    return (
        <Box width="100%" height="120px">
            <a className="no-underline" href={link}>
                <Card>
                    <Container>
                        <Row>
                            <h1>{title}</h1>
                            <Box>
                                <Column gap={2}>
                                    {description}
                                    <Row>
                                        {skillsUsed}
                                    </Row>
                                </Column>
                            </Box>
                        </Row>
                    </Container>
                </Card>
            </a>
        </Box>
    );
}

type CardInfo =
{
    title: string;
    description: string;
    link?: string;
    skillsUsed: string | string[];
}

function PortfolioProjectsSection(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {
            title: "Chameleon Engine",
            description: "High-performance, cross-platform game engine.",
            link: "",
            skillsUsed: "",
        },
        {
            title: "Moduserve",
            description: "C++ I/O framework for simple connection management.",
            link: "",
            skillsUsed: "",
        },
        {
            title: "CursesGUI",
            description: "C++-based TUI framework to simplify Curses-based application development.",
            link: "",
            skillsUsed: "",
        },
        {
            title: "LOL (Language-on-Language)",
            description: "A general-purpose programming language runtime and parser.",
            link: "",
            skillsUsed: "",
        },
        {
            title: "TheBlkBox",
            description: "Giant server.",
            link: "",
            skillsUsed: "",
        },
        {
            title: "Dial-up ISP",
            description: "If you know what dial-up is, you are old (probably).",
            link: "",
            skillsUsed: "",
        },
    ];

    // Split the cards into chunks of 2
    const chunkedCards: any[] = [];
    for (let i: number = 0; i < cards.length; i += 2)
        chunkedCards.push(cards.slice(i, i + 2));

    return (
        <Section id="projects">
            <SectionHeader title="Projects"
                           description="Some of the things I've spent time working on" />
            <Container>
                <Column gap={4}>
                    {chunkedCards.map((pair: CardInfo[], idx: number): React.JSX.Element => (
                        <Row key={idx} gap={4}>
                            {pair.map((card: CardInfo): React.JSX.Element => (
                                <Box width="50%" key={card.title}>
                                    <ProjectCard
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                        skillsUsed={card.skillsUsed}
                                    />
                                </Box>
                            ))}
                        </Row>
                    ))}
                </Column>
            </Container>
            <Divider />
        </Section>
    );
}

export default PortfolioProjectsSection;