import React from "react";
import Section from "../../../components/layout/Section";
import SectionHeader from "./SectionHeader.tsx";
import Box from "../../../components/layout/Box";
import Container from "../../../components/layout/Container";
import Row from "../../../components/layout/Row";
import Column from "../../../components/layout/Column";
import Icon from "../../../components/ui/Icon";
import Card from "../../../components/ui/Card";
import EmailForm from "../../../features/EmailForm";

function LinkIcon(): React.JSX.Element
{
    return (
        <Icon src="/link-icon.png"
              alt="Link icon"
              size="1.5rem"
        />
    );
}

type LinkCardProps =
{
    iconPath: string;
    iconAlt?: string;
    siteName: string;
    siteLink: string;
}

function LinkCard(
{
    iconPath, iconAlt,
    siteName,
    siteLink}: LinkCardProps): React.JSX.Element
{
    return (
        <Card>
            <Container>
                <a href={`${siteLink}`}
                   className="no-underline"
                >
                    <Row>
                        <Row justify="start">
                            <Icon src={`${iconPath}`}
                                  alt={`${iconAlt}`}
                                  size="2rem"
                            />
                            <p>{siteName}</p>
                        </Row>
                        <LinkIcon />
                    </Row>
                </a>
            </Container>
        </Card>
    );
}

function LinkCardGroup(): React.JSX.Element
{
    return (
        <Row align="start">
            <LinkCard iconPath="/logos/github-logo.png"
                      iconAlt="Github Logo Icon"
                      siteName="Github"
                      siteLink="https://github.com/mykalsullivan"/>
            <LinkCard iconPath="/logos/linkedin-logo.png"
                      iconAlt="LinkedIn Logo Icon"
                      siteName="LinkedIn"
                      siteLink="https://www.linkedin.com/in/mykal-sullivan/"/>
        </Row>
    );
}

function EmailFormCard(): React.JSX.Element
{
    return (
        <Box>
            <Column>
                <EmailForm />
                <LinkCardGroup />
            </Column>
        </Box>
    );
}

function ConnectionMessage(): React.JSX.Element
{
    return (
        <Box maxWidth="50rem">
            <Column items="start" align="start" gap={4}>
                <p className="text-2xl font-bold">Project in-mind?</p>
                <p className="text-2xl font-bold">Wanting to learn something new?</p>
                <p className="text-2xl font-bold">Wanting to let me know what I can do to improve this page?</p>
                <p className="text-2xl font-bold">I'm all ears.</p>
            </Column>
        </Box>
    );
}

function PortfolioConnectSection(): React.JSX.Element
{
    return (
        <Section id="connect">
            <SectionHeader title="Let's connect!" />
            <Column items="center">
                <EmailFormCard />
            </Column>
        </Section>
    );
}

export default PortfolioConnectSection;