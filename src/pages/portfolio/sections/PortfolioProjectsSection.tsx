import React from "react";
import PortfolioSection from "./PortfolioSection";
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
            <Card>
                <Row justify="evenly">
                    <Column justify="start" gap={2}>
                        {title}
                        {description}
                    </Column>
                </Row>
            </Card>
        </Box>
    );
}

function PortfolioProjectsSection(): React.JSX.Element
{
    return (
        <>
            <PortfolioSection
                id="projects"
                title="Projects"
                description="Some of the things I've spent time working on">
                <Container>
                    <Column>
                        <ProjectCard title="Chameleon Engine"
                                     description="Game Engine"
                                     link=""
                                     skillsUsed={""} />
                        <ProjectCard title="Moduserve"
                                     description=""
                                     link=""
                                     skillsUsed={""} />
                        <ProjectCard title="CursesGUI"
                                     description=""
                                     link=""
                                     skillsUsed={""} />
                    </Column>
                </Container>
            </PortfolioSection>
            <Divider />
        </>
    );
}

export default PortfolioProjectsSection;