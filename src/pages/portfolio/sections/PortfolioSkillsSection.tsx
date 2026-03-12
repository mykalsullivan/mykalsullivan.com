import React from "react";
import SectionHeader from "./SectionHeader.tsx";
import Section from "../../../components/layout/Section";
import Box from "../../../components/layout/Box";
import Container from "../../../components/layout/Container";
import Row from "../../../components/layout/Row.tsx";
import Column from "../../../components/layout/Column.tsx";
import Card from "../../../components/ui/Card";
import Icon from "../../../components/ui/Icon";
import Divider from "../../../components/layout/Divider";

type LogoCardProps =
{
    name: string;
    iconPath: string;
    iconAlt: string;
}

function LogoCard({name, iconPath, iconAlt}: LogoCardProps): React.JSX.Element
{
    return (
        <Box height={160} width={160}>
            <Card>
                <Container>
                    <Column items="center" gap={6}>
                        <Icon src={`/logos/${iconPath}`} alt={iconAlt} size="80px" />
                        <span className="font-bold">{name}</span>
                    </Column>
                </Container>
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
        <article className="mb-20">
            <Column items="start">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-lg">{description}</p>
            </Column>
            {children}
        </article>
    );
}

type CardInfo =
{
    name: string;
    path: string;
}

function TechnologySection(title: string, cards: CardInfo[]): React.JSX.Element
{
    return (
        <SkillsArticle title={title}>
            <SkillList>
                {
                    cards.map((card: CardInfo): React.JSX.Element =>
                        <LogoCard name={card.name} iconPath={card.path} iconAlt={`${card.name} logo`}/>
                    )
                }
            </SkillList>
        </SkillsArticle>
    );
}

function ProgrammingLanguages(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "C/C++", path: "cpp-logo.png"},
        {name: "Rust", path: "rust-logo.png"},
        {name: "Golang", path: "golang-logo.png"},
        {name: "Java", path: "java-logo.png"},
        {name: "Python", path: "python-logo.png"},
        {name: "C#", path: "cs-logo.png"},
        {name: "Dart", path: "dart-logo.png"},
        {name: "HTML", path: "html-logo.png"},
        {name: "CSS", path: "css-logo.png"},
        {name: "JavaScript", path: "js-logo.png"},
        {name: "TypeScript", path: "ts-logo.png"},
        {name: "SQL", path: "sql-logo.png"}
    ];

    return TechnologySection("Programming Languages", cards);
}

function InfrastructureTechnologies(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "Linux", path: "linux-logo.png"},
        {name: "Bash", path: "bash-logo.png"},
        {name: "PowerShell", path: "ps-logo.png"},
        {name: "Docker", path: "docker-logo.png"},
        {name: "Ansible", path: "ansible-logo.png"},
        {name: "Nginx", path: "nginx-logo.png"},
        {name: "HAProxy", path: "haproxy-logo.png"},
        {name: "Microsoft Azure", path: "azure-logo.png"},
        {name: "PostgreSQL", path: "postgresql-logo.png"},
        {name: "QEMU/KVM", path: "qemu-logo.png"}
    ];

    return TechnologySection("Infrastructure & Cloud", cards);
}

function WebTechnologies(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "React.js", path: "reactjs-logo.png"},
        {name: "Tailwind", path: "tailwind-logo.png"},
        {name: "Node.js", path: "nodejs-logo.png"},
        {name: "Prisma", path: "prisma-logo.png"},
        {name: "Jekyll", path: "jekyll-logo.png"}
    ];

    return TechnologySection("Web Technologies", cards);
}

function GraphicsAndGameDevelopmentTechnologies(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "OpenGL", path: "opengl-logo.png"},
        {name: "WebGPU", path: "webgpu-logo.png"},
        {name: "Unreal", path: "uengine-logo.png"},
        {name: "Blender", path: "blender-logo.png"}
    ];

    return TechnologySection("Graphics & Game Development", cards);
}

function UIFrameworks(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "Qt", path: "qt-logo.png"},
        {name: ".NET", path: "dotnet-logo.png"},
        {name: "JavaFX", path: "java-logo.png"},
        {name: "Flutter", path: "flutter-logo.png"}
    ];

    return TechnologySection("UI Frameworks", cards);
}

function DSPTechnologies(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {name: "JUCE", path: "juce-logo.png"},
        {name: "LTspice", path: "ltspice-logo.png"}
    ];

    return TechnologySection("DSP / Audio", cards);
}

function TechnologiesSection(): React.JSX.Element
{
    return (
        <section>
            <ProgrammingLanguages />
            <InfrastructureTechnologies />
            <WebTechnologies />
            <GraphicsAndGameDevelopmentTechnologies />
            <UIFrameworks />
            <DSPTechnologies />
        </section>
    );
}

function Domains(): React.JSX.Element
{
    return (
        <section>

        </section>
    );
}

function PortfolioSkillsSection(): React.JSX.Element
{
    return (
        <Section id="skills">
            <SectionHeader title="Skills"
                           description="A general overview of the technologies I have used and my professional
                                                 skills." />
            <TechnologiesSection />
            <Divider />
        </Section>
    );
}

export default PortfolioSkillsSection;