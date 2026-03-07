import React from "react";
import Row from "../layout/Row";

type NavLinkProps = React.ComponentPropsWithoutRef<"a">;

Navbar.NavLink = function NavLink(
{
    children,
    ...rest
}: NavLinkProps): React.JSX.Element
{
    return (
        <li>
            <a
                className="
                block
                px-4 py-1
                text-center text-neutral-400 no-underline
                bg-neutral-900
                border
                border-neutral-700
                rounded-xl
                transition-colors
                duration-100
                ease-in-out
                hover:bg-neutral-800
                hover:shadow-2xl
                hover:text-white
                "
                {...rest}
            >
                {children}
            </a>
        </li>
    );
}

type NavbarProps =
{
    children: React.ReactElement<typeof Navbar.NavLink>[];
};

function Navbar({children}: NavbarProps): React.JSX.Element
{
    return (
        <nav className="my-auto">
            <ul className="list-none pr-4">
                <Row>
                    {children}
                </Row>
            </ul>
        </nav>
    );
}

export default Navbar;