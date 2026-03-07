import React from "react";
import Row from "../layout/Row.tsx";
import Logo from "./Logo.tsx";
import Navbar from "./Navbar.tsx";

function Header() : React.JSX.Element
{
    return (
        <header className="sticky flex w-full justify-center top-0 z-9999 border-b border-neutral-700 p-2 backdrop-blur-md">
            <div className="w-full max-w-450 mx-4 my-2">
                <Row>
                    <Row>
                        <Logo />
                    </Row>
                    <Navbar>
                        <Navbar.NavLink href="#summary">Summary</Navbar.NavLink>
                        <Navbar.NavLink href="#skills">Skills</Navbar.NavLink>
                        <Navbar.NavLink href="#about">About</Navbar.NavLink>
                        <Navbar.NavLink href="#contact">Contact</Navbar.NavLink>
                    </Navbar>
                </Row>
            </div>
        </header>
    );
}

export default Header;