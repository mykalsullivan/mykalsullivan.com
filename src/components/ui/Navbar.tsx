import React from "react";
import styles from "./Navbar.module.css";

type NavLinkProps = React.ComponentPropsWithoutRef<"a">;

Navbar.NavLink = function NavLink(
    {
        children,
        ...rest
    }: NavLinkProps): React.JSX.Element
{
    return (
        <a
            className={styles.link}
            {...rest}
        >
            {children}
        </a>
    );
}

type NavbarProps =
{
    children: React.ReactElement<typeof Navbar.NavLink>[];
};

function Navbar({children}: NavbarProps): React.JSX.Element
{
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                {children}
            </ul>
        </nav>
    );
}

export default Navbar;