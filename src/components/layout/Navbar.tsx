import React from "react";
import { Link } from "react-router-dom";

type NavbarLinkProps =
{
    children: React.ReactNode;
    to: string;
}

function NavbarLink({children, to}: NavbarLinkProps): React.JSX.Element
{
    return (
        <li>
            <Link
                className="
                    block
                    px-4 py-1
                    text-center text-neutral-400 no-underline
                    bg-black
                    backdrop-blur-lg
                    hover:text-white
                    duration-200
                    ease-in-out
                "
                to={to}
            >
                {children}
            </Link>
        </li>
    );
}

type NavbarProps =
{
    children: React.ReactNode;
};

function Navbar({children}: NavbarProps): React.JSX.Element
{
    return (
        <nav className="mr-2">
            <ul className="
                flex flex-row
                my-auto
                items-center
            ">
                {children}
            </ul>
        </nav>
    );
}

Navbar.Link = NavbarLink;

export default Navbar;