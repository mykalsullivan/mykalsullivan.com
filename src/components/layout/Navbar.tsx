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
        <li className="inline-block">
            <Link
                className="
                    block
                    px-4 py-1
                    text-center text-neutral-400 no-underline
                    bg-black/50
                    backdrop-blur-lg
                    rounded-lg
                    border border-neutral-700
                    transition-colors
                    duration-100
                    ease-in-out
                    hover:text-white
                    hover:bg-neutral-800
                    hover:shadow-2xl
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
        <nav>
            <ul className="
                flex flex-row
                my-auto
                gap-4
            ">
                {children}
            </ul>
        </nav>
    );
}

Navbar.Link = NavbarLink;

export default Navbar;