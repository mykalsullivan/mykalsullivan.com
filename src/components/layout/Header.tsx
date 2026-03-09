import React from "react";

type HeaderProps =
{
    children: React.ReactNode;
}

function Header({children}: HeaderProps) : React.JSX.Element
{
    return (
        <header>
            {children}
        </header>
    );
}

export default Header;