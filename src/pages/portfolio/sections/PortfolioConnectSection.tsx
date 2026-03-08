import React from "react";
import Section from "../../../components/layout/Section.tsx";
import Article from "../../../components/layout/Article.tsx";
import Container from "../../../components/layout/Container";
import Row from "../../../components/layout/Row.tsx";
import Column from "../../../components/layout/Column.tsx";
import Icon from "../../../components/ui/Icon.tsx";
import Card from "../../../components/ui/Card.tsx";
import Form from "../../../components/form/Form.tsx";

function Arrow(): React.JSX.Element
{
    return (
        <p>Arrow</p>
    );
}

type LinkCardProps =
{
    iconPath: string;
    iconAlt?: string;
    siteName: string;
    description: string;
}

function LinkCard({iconPath, iconAlt, siteName, description}: LinkCardProps): React.JSX.Element
{
    return (
        <Card>
            <Row>
                <Row>
                    <Column>
                        <Icon src={`/assets/images/${iconPath}`} alt={iconAlt} />
                        <p>{siteName}</p>
                    </Column>
                    <p>{description}</p>
                </Row>
                <Arrow />
            </Row>
        </Card>
    );
}

function LinksArticle(): React.JSX.Element
{
    return (
        <Article>
            <Row>
                <LinkCard iconPath="github" iconAlt="github" siteName="github" description="My public projects" />
                <LinkCard iconPath="linkedin" iconAlt="github" siteName="linkedin" description="LinkedIn" />
            </Row>
        </Article>
    );
}

function NameFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Name:</p>
            <div className="
                w-full
                h-10
                bg-gray-700
                rounded-lg
            ">
            </div>
        </Column>
    );
}

function EmailFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Email:</p>
            <div className="
                w-full
                h-10
                bg-gray-700
                rounded-lg
            ">
            </div>
        </Column>
    );
}

function SubjectFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Subject:</p>
            <div className="
                w-full
                h-10
                bg-gray-700
                rounded-lg
            ">
            </div>
        </Column>
    );
}

function MessageFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Message:</p>
            <div className="
                w-full
                h-10
                bg-gray-700
                rounded-lg
            ">
            </div>
        </Column>
    );
}

function EmailForm(): React.JSX.Element
{
    return (
        <Form>
            <Column>
                <Row>
                    <NameFormField />
                    <EmailFormField />
                </Row>
                <SubjectFormField />
                <MessageFormField />
            </Column>
        </Form>
    );
}

function EmailFormArticle(): React.JSX.Element
{
    return (
        <Article>
            <div className="
                bg-neutral-900
                rounded-xl
            ">
                <Container>
                    <h1>...or, reach out now (if you would like)</h1>
                    <EmailForm />
                </Container>
            </div>
        </Article>
    );
}

function PortfolioConnectSection(): React.JSX.Element
{
    return (
        <Section id="connect">
            <h1 className="text-4xl">Let's connect!</h1>
            <LinksArticle />
            <EmailFormArticle />
        </Section>
    );
}

export default PortfolioConnectSection;