import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Box from "../components/layout/Box";
import Container from "../components/layout/Container";
import Row from "../components/layout/Row";
import Icon from "../components/ui/Icon";
import Card from "../components/ui/Card";

type SiteHeaderProps =
{
    children: React.ReactNode;
}

function SiteHeaderOuter({children}: SiteHeaderProps): React.JSX.Element
{
    return (
        <header className="
                    sticky
                    justify-center
                    top-0 z-9999
                    bg-black
                    border-b border-neutral-700
        ">
            {children}
        </header>
    );
}

function SiteHeaderInner({children}: SiteHeaderProps): React.JSX.Element
{
    return (
        <div className="
                w-full
                max-w-450
                mx-auto
                p-2
            ">
            {children}
        </div>
    );
}

function SiteHeaderLogo(): React.JSX.Element
{
    return (
        <Box>
            <Link className="no-underline" to="/">
                <Container>
                    <Row>
                        <Icon src="favicon.png" alt="Logo icon" size="3rem"/>
                        <span className="text-xl font-bold">Mykal Sullivan</span>
                    </Row>
                </Container>
            </Link>
        </Box>
    );
}

function ResumeCVButton(): React.JSX.Element
{
    return (
        <Box>
            <Container>
                <a className="no-underline" href="/resume.pdf" download>Resume / CV</a>
            </Container>
        </Box>
    );
}

function SiteHeaderNavbar(): React.JSX.Element
{
    return (
        <Navbar>
            <Navbar.Link to="https://www.github.com/mykalsullivan">
                <Icon src="/logos/github-logo.png" alt="Github logo" size="2rem"/>
            </Navbar.Link>
            <Navbar.Link to="https://www.linkedin.com/in/mykal-sullivan">
                <Icon src="/logos/linkedin-logo.png" alt="LinkedIn logo" size="2rem"/>
            </Navbar.Link>
        </Navbar>
    );
}

function SiteHeader(): React.JSX.Element
{
    return (
        <SiteHeaderOuter>
            <SiteHeaderInner>
                <Row justify="between">
                    <SiteHeaderLogo />
                    <Box>
                        <Row>
                            <ResumeCVButton />
                            <SiteHeaderNavbar />
                        </Row>
                    </Box>
                </Row>
            </SiteHeaderInner>
        </SiteHeaderOuter>
    );
}

export default SiteHeader;