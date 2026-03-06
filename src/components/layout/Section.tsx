import React from "react";
import styles from "./Section.module.css";

type SectionProps =
{
    children?: React.ReactNode;
}

function Section({children}: SectionProps)
{
    return <section className={styles.section}>{children}</section>;
}

export default Section;