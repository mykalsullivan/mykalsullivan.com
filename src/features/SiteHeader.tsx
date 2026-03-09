import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar.tsx";
import Row from "../components/layout/Row.tsx";
import Icon from "../components/ui/Icon";

function SiteHeaderLogo(): React.JSX.Element
{
    return (
        <Link className="
                pr-4
                text-neutral-400
                no-underline
                bg-black/50
                rounded-lg
                border
                border-neutral-700
            "
              to="/">
            <Row>
                <Icon src="favicon.png" alt="Logo icon" size="3rem"/>
                <span className="text-xl font-bold">Mykal Sullivan</span>
            </Row>
        </Link>
    );
}

function SiteHeader() : React.JSX.Element
{
    return (
        <>
            <div className="
                sticky
                flex
                justify-center
                top-0 z-9999
                bg-black
                border-b border-neutral-700
            ">
                <div className="
                    w-full
                    max-w-450
                    mx-2 my-2
                ">
                    <Row justify="between">
                        <SiteHeaderLogo />
                        <Navbar>
                            <Navbar.Link to="/blog">Blog</Navbar.Link>
                            <Navbar.Link to="/about">About</Navbar.Link>
                            <Navbar.Link to="https://www.github.com/mykalsullivan">
                                <Icon src="/logos/github-logo.png" alt="Github logo" size="2rem"/>
                            </Navbar.Link>
                            <Navbar.Link to="https://www.linkedin.com/in/mykal-sullivan">
                                <Icon src="/logos/linkedin-logo.png" alt="LinkedIn logo" size="2rem"/>
                            </Navbar.Link>
                        </Navbar>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default SiteHeader;