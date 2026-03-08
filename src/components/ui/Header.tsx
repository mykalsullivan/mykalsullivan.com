import React from "react";
import Row from "../layout/Row";
import Navbar from "./Navbar";
import Icon from "./Icon";

function HeaderLogo(): React.JSX.Element
{
    return (
        <a className="
            pr-4
            text-neutral-400
            no-underline
            rounded-lg
            bg-black/50
            border
            border-neutral-700
        "
           href="/">
            <Row>
                <Icon src="/assets/images/favicon.png" alt="logo" size="xl"/>
                <span className="text-xl font-bold">Mykal Sullivan</span>
            </Row>
        </a>
    );
}

function Header() : React.JSX.Element
{
    return (
        <header className="
            sticky
            flex
            w-full
            justify-center
            top-0 z-9999
            p-2
            bg-linear-to-b from-transparent to-neutral-950/70 backdrop-blur-md
            border-b border-neutral-700
        ">
            <div className="
                w-full
                max-w-450
                mx-4 my-2
            ">
                <Row>
                    <HeaderLogo />
                    <Navbar>
                        <Navbar.NavLink href="#summary">Summary</Navbar.NavLink>
                        <Navbar.NavLink href="#skills">Skills</Navbar.NavLink>
                        <Navbar.NavLink href="#contact">Contact</Navbar.NavLink>
                    </Navbar>
                    <Navbar>
                        <Navbar.NavLink href="/blog">Blog</Navbar.NavLink>
                        <Navbar.NavLink href="/about">About</Navbar.NavLink>
                    </Navbar>
                </Row>
            </div>
        </header>
    );
}

export default Header;