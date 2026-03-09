import React from "react";
import PortfolioSection from "./PortfolioSection";
import Section from "../../../components/layout/Section";
import Article from "../../../components/layout/Article";
import Box from "../../../components/layout/Box";
import Row from "../../../components/layout/Row.tsx";
import Column from "../../../components/layout/Column.tsx";
import Card from "../../../components/ui/Card";
import Icon from "../../../components/ui/Icon";
import Divider from "../../../components/layout/Divider";

type SkillCardProps =
{
    name: string;
    iconPath: string;
    iconAlt?: string;
}

function SkillCard({name, iconPath, iconAlt}: SkillCardProps): React.JSX.Element
{
    return (
        <Box height={120} width={120}>
            <Card>
                <Column items="center" gap={2}>
                    <Icon src={`/logos/${iconPath}`} alt={iconAlt} size={"75px"}/>
                    <p className="font-bold">{name}</p>
                </Column>
            </Card>
        </Box>
    );
}

type SkillTagProps =
{
    title: string;
}

function SkillTag({title}: SkillTagProps): React.JSX.Element
{
    return (
        <p className="bg-neutral-800 text-white">{title}</p>
    );
}

type SkillListProps =
{
    children: React.ReactNode;
}

function SkillList({children}: SkillListProps): React.JSX.Element
{
    return (
        <Row justify="start" gap={4} wrap>
            {children}
        </Row>
    );
}

type SkillsSubsectionProps =
{
    title?: string;
    description?: string;
    children: React.ReactNode;
}

function SkillsSubsection({title, description, children}: SkillsSubsectionProps): React.JSX.Element
{
    return (
        <div>
            <Row justify="center">
                <h3 className="text-lg">{title}</h3>
                {description && <h3 className="text-lg">{description}</h3>}
            </Row>
            <div className="my-4">
                {children}
            </div>
        </div>
    );
}

type SkillsArticleProps =
{
    title: string;
    description?: string;
    children: React.ReactNode;
}

function SkillsArticle({title, description, children}: SkillsArticleProps): React.JSX.Element
{
    return (
        <Article>
            <Column items="center">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-lg">{description}</p>
            </Column>
            {children}
        </Article>
    );
}

function SystemsAndLowLevelProgramming(): React.JSX.Element
{
    return (
        <SkillsArticle
            title="Systems & Low-Level Programming"
            description="High-performance software... blah blah blah">
            <SkillsSubsection>
                <SkillList>
                    <SkillCard name="C++" iconPath="cpp-logo.png" iconAlt="C++ logo" />
                    <SkillCard name="C" iconPath="c-logo.png" iconAlt="C logo" />
                    <SkillCard name="Rust" iconPath="rust-logo.png" iconAlt="Rust logo" />
                    <SkillCard name="Golang" iconPath="golang-logo.png" iconAlt="Golang logo" />
                    <SkillCard name="Bash" iconPath="bash-logo.png" iconAlt="Bash icon" />
                    <SkillCard name="PowerShell" iconPath="ps-logo.png" iconAlt="PowerShell logo" />
                    <SkillCard name="PostgreSQL" iconPath="postgresql-logo.png" iconAlt="PostgreSQL logo" />
                </SkillList>
            </SkillsSubsection>
        </SkillsArticle>
    );
}

function DevOpsAndInfrastructure(): React.JSX.Element
{
    return (
        <SkillsArticle title="DevOps & Infrastructure" description="Web sites and dick">
            <SkillsSubsection title="Languages:">
                <SkillList>
                    <></>
                </SkillList>
            </SkillsSubsection>
        </SkillsArticle>
    );
}

function NetworkingAndSecurity(): React.JSX.Element
{
    return (
        <SkillsArticle title="Infrastructure & Networking" description="Crazy cool computer shiz">
            <SkillsSubsection title="Languages:">
                <SkillList>
                    <></>
                </SkillList>
            </SkillsSubsection>
        </SkillsArticle>
    );
}

function GraphicsAndGameDevelopment(): React.JSX.Element
{
    return (
        <SkillsArticle title="Game Development & Graphics" description="Game stuff">
            <SkillsSubsection>
                <SkillList>
                    <></>
                </SkillList>
            </SkillsSubsection>
            <SkillsSubsection title="Key skills:">
                <SkillList>
                    <></>
                </SkillList>
            </SkillsSubsection>
            <SkillsSubsection title="Tools:">
                <SkillList>
                    <></>
                </SkillList>
            </SkillsSubsection>
        </SkillsArticle>
    );
}

function BackendServices(): React.JSX.Element
{
    return (
        <SkillsArticle title="Backend Services" description="Web sites and dick">
            <></>
        </SkillsArticle>
        );
}

function WebDevelopment(): React.JSX.Element
{
    return (
        <SkillsArticle title="Web Development" description="Web sites and dick">
            <SkillsSubsection>
                <SkillList>
                    <SkillCard name="HTML" iconPath="html-logo.png" iconAlt="HTML icon" />
                    <SkillCard name="CSS" iconPath="css-logo.png" iconAlt="CSS icon" />
                    <SkillCard name="JavaScript" iconPath="js-logo.png" iconAlt="JavaScript icon" />
                    <SkillCard name="TypeScript" iconPath="ts-logo.png" iconAlt="TypeScript icon" />
                    <SkillCard name="React.js" iconPath="reactjs-logo.png" iconAlt="React.js icon" />
                    <SkillCard name="Tailwind" iconPath="tailwind-logo.png" iconAlt="Tailwind icon" />
                    <SkillCard name="Node.js" iconPath="nodejs-logo.png" iconAlt="Node.js icon" />
                </SkillList>
            </SkillsSubsection>
        </SkillsArticle>
    );
}

function PortfolioSkillsSection(): React.JSX.Element
{
    return (
        <>
            <PortfolioSection id="skills" title="Skills">
                <SystemsAndLowLevelProgramming />
                <DevOpsAndInfrastructure />
                <NetworkingAndSecurity />
                <GraphicsAndGameDevelopment />
                <BackendServices />
                <WebDevelopment />
            </PortfolioSection>
            <Divider />
        </>
    );
}

export default PortfolioSkillsSection;