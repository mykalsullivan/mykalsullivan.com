import React from "react";
import Section from "../../../components/layout/Section.tsx";
import Article from "../../../components/layout/Article.tsx";
import Column from "../../../components/layout/Column.tsx";
import FlowBox from "../../../components/layout/FlowBox.tsx";
import Card from "../../../components/ui/Card.tsx";
import Icon from "../../../components/ui/Icon.tsx";

type SkillCardProps =
{
    name: string;
    iconPath: string;
    iconAlt?: string;
}

function SkillCard({name, iconPath, iconAlt}: SkillCardProps): React.JSX.Element
{
    return (
        <Card>
            <Column>
                <Icon src={`/assets/images/${iconPath}`} alt={iconAlt} />
                <p className="text-center">{name}</p>
            </Column>
        </Card>
    );
}

function SkillsLanguages(): React.JSX.Element
{
    return (
        <Article>
            <h2>Programming languages:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name="C++" iconPath="path" iconAlt="C++ Icon" />
                <SkillCard name="JavaScript" iconPath="path" iconAlt="JavaScript Icon" />
                <SkillCard name="TypeScript" iconPath="path" iconAlt="TypeScript Icon" />
                <SkillCard name="HTML" iconPath="path" iconAlt="HTML Icon" />
                <SkillCard name="CSS" iconPath="path" iconAlt="CSS Icon" />
                <SkillCard name="Java" iconPath="path" iconAlt="Java Icon" />
                <SkillCard name="Go" iconPath="path" iconAlt="Go Icon" />
                <SkillCard name="C#" iconPath="path" iconAlt="C# Icon" />
                <SkillCard name="Python" iconPath="path" iconAlt="Python Icon" />
                <SkillCard name="Bash" iconPath="path" iconAlt="Bash Icon" />
                <SkillCard name="PowerShell" iconPath="path" iconAlt="PowerShell Icon" />
                <SkillCard name="SQL" iconPath="path" iconAlt="SQL Icon" />
            </FlowBox>
        </Article>
    );
}

function SkillsFrameworks(): React.JSX.Element
{
    return (
        <Article>
            <h2>Programming frameworks:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name="Qt" iconPath="path" iconAlt="alt" />
                <SkillCard name="React.js" iconPath="path" iconAlt="alt" />
                <SkillCard name="Tailwind" iconPath="path" iconAlt="alt" />
                <SkillCard name="EnTT" iconPath="path" iconAlt="alt" />
                <SkillCard name="SDL2" iconPath="path" iconAlt="alt" />
                <SkillCard name=".NET" iconPath="path" iconAlt="alt" />
            </FlowBox>
        </Article>
    );
}

function SkillsLibraries(): React.JSX.Element
{
    return (
        <Article>
            <h2>Programming libraries:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name="Ncurses" iconPath="path" iconAlt="alt" />
                <SkillCard name="Ncurses" iconPath="path" iconAlt="alt" />
            </FlowBox>
        </Article>
    );
}

function SkillsTechnologies(): React.JSX.Element
{
    return (
        <Article>
            <h2>Technologies:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name="Qt" iconPath="path" iconAlt="Bash Icon" />
                <SkillCard name="Ncurses" iconPath="path" iconAlt="SQL Icon" />
            </FlowBox>
        </Article>
    );
}

function SkillsTools(): React.JSX.Element
{
    return (
        <Article>
            <h2>Tools:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name="CMake" iconPath="path" iconAlt="alt" />
                <SkillCard name="Gradle" iconPath="path" iconAlt="alt" />
                <SkillCard name="Vite" iconPath="path" iconAlt="alt" />
                <SkillCard name="NPM" iconPath="path" iconAlt="alt" />
                <SkillCard name="CLion" iconPath="path" iconAlt="alt" />
                <SkillCard name="IntelliJ IDEA" iconPath="path" iconAlt="alt" />
                <SkillCard name="Rider" iconPath="path" iconAlt="alt" />
                <SkillCard name="Webstorm" iconPath="path" iconAlt="alt" />
                <SkillCard name="Android Studio" iconPath="path" iconAlt="alt" />
                <SkillCard name="Unreal Editor" iconPath="path" iconAlt="alt" />
                <SkillCard name="Blender" iconPath="path" iconAlt="alt" />
                <SkillCard name="LTspice" iconPath="path" iconAlt="alt" />
                <SkillCard name="Visual Studio/Visual Studio Code" iconPath="path" iconAlt="alt" />
                <SkillCard name="Vim" iconPath="path" iconAlt="alt" />
            </FlowBox>
        </Article>
    );
}

function SkillsInfrastructure(): React.JSX.Element
{
    return (
        <Article>
            <h2>Infrastructure Tools:</h2>
            <FlowBox direction="row" gap="4">
                <SkillCard name={"Cisco Hardware"} iconPath={"path"} />
                <SkillCard name={"pfSense"} iconPath={"path"} />
                <SkillCard name={"Wireguard"} iconPath={"path"} />
                <SkillCard name={"Ansible"} iconPath={"path"} />
                <SkillCard name={"QEMU/KVM"} iconPath={"path"} />
                <SkillCard name={"PPP"} iconPath={"path"} />
                <SkillCard name={"Dial-up"} iconPath={"path"} />
                <SkillCard name={"Legacy Operating Systems"} iconPath={"path"} />
                <SkillCard name={"Linux"} iconPath={"path"} />
                <SkillCard name={"Asterisk VoIP"} iconPath={"path"} />
                <SkillCard name={"CG-NAT Networking"} iconPath={"path"} />
                <SkillCard name={"Virtualized Network Hardware"} iconPath={"path"} />
                <SkillCard name={"Docker"} iconPath={"path"} />
                <SkillCard name={"Windows Server"} iconPath={"path"} />
                <SkillCard name={"Debian"} iconPath={"path"} />
                <SkillCard name={"Arch Linux"} iconPath={"path"} />
                <SkillCard name={"RHEL"} iconPath={"path"} />
            </FlowBox>
        </Article>
    );
}

function Skills(): React.JSX.Element
{
    return (
        <>
            <SkillsLanguages />
            <SkillsFrameworks />
            <SkillsLibraries />
            <SkillsTechnologies />
            <SkillsTools />
            <SkillsInfrastructure />
        </>
    );
}

function PortfolioSkillsSection(): React.JSX.Element
{
    return (
        <>
            <Section id="skills">
                <h1 className="text-4xl">Skills</h1>
                <Skills />
            </Section>
        </>
    );
}

export default PortfolioSkillsSection;