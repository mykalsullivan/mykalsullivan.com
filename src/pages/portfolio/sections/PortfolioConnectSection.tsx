import React from "react";
import PortfolioSection from "./PortfolioSection";
import Article from "../../../components/layout/Article";
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
              size="2rem"
        />
    );
}

type LinkCardProps =
{
    iconPath: string;
    iconAlt?: string;
    siteName: string;
    siteLink: string;
    description: string;
}

function LinkCard(
{
    iconPath, iconAlt,
    siteName,
    siteLink,
    description}: LinkCardProps): React.JSX.Element
{
    return (
        <Card>
            <a href={`${siteLink}`}
               className="no-underline"
            >
                <Row>
                    <Row justify="start">
                        <Icon src={`${iconPath}`}
                              alt={iconAlt}
                              size="2rem"
                        />
                        <Column gap={0}>
                            <p>{siteName}</p>
                            <p>{description}</p>
                        </Column>
                    </Row>
                    <LinkIcon />
                </Row>
            </a>
        </Card>
    );
}

function LinksArticle(): React.JSX.Element
{
    return (
        <Article>
            <Column align="start">
                <LinkCard iconPath="/logos/github-logo.png"
                          iconAlt="Github Logo Icon"
                          siteName="Github"
                          siteLink="https://github.com/mykalsullivan"
                          description="My public projects" />
                <LinkCard iconPath="/logos/linkedin-logo.png"
                          iconAlt="LinkedIn Logo Icon"
                          siteName="LinkedIn"
                          siteLink="https://www.linkedin.com/in/mykal-sullivan/"
                          description="LinkedIn" />
                <LinkCard iconPath="/mail-icon.png"
                          iconAlt="Email Icon"
                          siteName="Email"
                          siteLink="mailto:mykalsullivan@duck.com"
                          description="Email" />
                <LinkCard iconPath="/phone-icon.png"
                          iconAlt="Phone Icon"
                          siteName="Phone"
                          siteLink="tel:5014497228"
                          description="Give a call or text directly!" />
            </Column>
        </Article>
    );
}

function EmailFormArticle(): React.JSX.Element
{
    return (
        <Article>
            <EmailForm />
        </Article>
    );
}

function PortfolioConnectSection(): React.JSX.Element
{
    return (
        <PortfolioSection
            id="connect"
            title="Let's Connect!"
            description="Have something you want to work on? Let me know! I am always open to new opportunties
                         to learn and make something new.">
            <Row>
                <LinksArticle />
                <EmailFormArticle />
            </Row>
        </PortfolioSection>
    );
}

export default PortfolioConnectSection;