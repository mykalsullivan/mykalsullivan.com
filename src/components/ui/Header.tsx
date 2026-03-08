import React from "react";
import Flex from "../layout/Flex.tsx";
import Navbar from "../layout/Navbar.tsx";
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
            <Flex>
                <Icon src="/assets/images/favicon.png" alt="logo" size="xl"/>
                <span className="text-xl font-bold">Mykal Sullivan</span>
            </Flex>
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
                <Flex justify="between">
                    <HeaderLogo />
                    <Navbar>
                        <Navbar.Link to="#summary">Summary</Navbar.Link>
                        <Navbar.Link to="#skills">Skills</Navbar.Link>
                        <Navbar.Link to="#contact">Contact</Navbar.Link>
                    </Navbar>
                    <Navbar>
                        <Navbar.Link to="/blog">Blog</Navbar.Link>
                        <Navbar.Link to="/about">About</Navbar.Link>
                    </Navbar>
                </Flex>
            </div>
        </header>
    );
}

export default Header;