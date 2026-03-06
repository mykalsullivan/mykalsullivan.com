import React from "react";
import styles from "./Header.module.css";
import Row from "./Row.tsx";
import Logo from "../ui/Logo.tsx";
import Navbar from "../ui/Navbar.tsx";

function Header() : React.JSX.Element
{
    return (
        <header className={styles.header}>
            <div className={styles.inside}>
                <Row>
                    <Row>
                        <Logo src="/public/assets/images/favicon.png" />
                        <p>Chameleon Engine</p>
                    </Row>
                    <Navbar>
                        <Navbar.NavLink href="">Debugger</Navbar.NavLink>
                        <Navbar.NavLink href="">Builder</Navbar.NavLink>
                    </Navbar>
                </Row>
            </div>
        </header>
    );
}

export default Header;