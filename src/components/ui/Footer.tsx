import React from "react";

type FooterProps =
{
    children: React.ReactNode;
}

function Footer({children}: FooterProps): React.JSX.Element
{
    return (
        <footer className="
            text-neutral-500
        ">
            {children}
        </footer>
    );
}

export default Footer;