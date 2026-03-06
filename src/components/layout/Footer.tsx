import React from "react";
import styles from "./Footer.module.css";
import Column from "./Column.tsx";

function Footer() : React.JSX.Element
{
    return (
        <footer className={styles.footer}>
            <Column>
                <span>(c) 2026 Mykal Sullivan</span>
            </Column>
        </footer>
    );
}

export default Footer;