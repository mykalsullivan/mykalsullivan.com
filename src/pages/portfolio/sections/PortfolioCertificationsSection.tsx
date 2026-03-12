import React from "react";
import Section from "../../../components/layout/Section";
import SectionHeader from "./SectionHeader.tsx";
import Box from "../../../components/layout/Box.tsx";
import Card from "../../../components/ui/Card.tsx";
import Row from "../../../components/layout/Row.tsx";
import Column from "../../../components/layout/Column.tsx";
import Container from "../../../components/layout/Container.tsx";
import Divider from "../../../components/layout/Divider.tsx";

type CardInfo =
{
    title: string;
    issuer: string;
    issueDate: string;
    description: string;
    certPath: string;
    iconPath: string;
    skillsUsed: string | string[];
}

function CertificationCard(
{
    title,
    issuer,
    issueDate,
    description,
    certPath,
    iconPath,
    skillsUsed
}: CardInfo): React.JSX.Element
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

function PortfolioCertificationsSection(): React.JSX.Element
{
    const cards: CardInfo[] =
    [
        {
            title: "A+",
            issuer: "CompTIA",
            issueDate: "",
            description: "",
            certPath: "",
            iconPath: "comptia-aplus-icon.png",
            skillsUsed: ""
        },
        {
            title: "Linux+",
            issuer: "CompTIA",
            issueDate: "",
            description: "",
            certPath: "",
            iconPath: "comptia-linuxplus-icon.png",
            skillsUsed: ""
        },
        {
            title: "Security+",
            issuer: "CompTIA",
            issueDate: "",
            description: "",
            certPath: "",
            iconPath: "comptia-securityplus-icon.png",
            skillsUsed: ""
        },
        {
            title: "Network+",
            issuer: "CompTIA",
            issueDate: "",
            description: "",
            certPath: "",
            iconPath: "comptia-networkplus-icon.png",
            skillsUsed: ""
        },
        {
            title: "AZ-900 Azure Fundamentals",
            issuer: "Microsoft",
            issueDate: "",
            description: "",
            certPath: "",
            iconPath: "ms-az900-icon.png",
            skillsUsed: ""
        }
    ];

    // Split the cards into chunks of 2
    const chunkedCards = [];
    for (let i: number = 0; i < cards.length; i += 2)
        chunkedCards.push(cards.slice(i, i + 2));

    return (
        <Section id="certifications">
            <SectionHeader title="Certifications"
                           description="My professional certifications" />
            <Container>
                <Column gap={4}>
                    {chunkedCards.map((pair: CardInfo[], idx: number): React.JSX.Element => (
                        <Row key={idx} gap={4}>
                            {pair.map((card: CardInfo): React.JSX.Element => (
                                <Box width="50%" key={card.title}>
                                    <CertificationCard
                                        title={card.title}
                                        issuer={card.issuer}
                                        issueDate={card.issueDate}
                                        description={card.description}
                                        certPath={card.certPath}
                                        iconPath={card.iconPath}
                                        skillsUsed={card.skillsUsed}
                                    />
                                </Box>
                            ))}
                        </Row>
                    ))}
                </Column>
            </Container>
        </Section>
    );
}

export default PortfolioCertificationsSection;