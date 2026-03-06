import React from "react";
import styles from "./Section.module.css";

type TextSectionProps =
{
    children?: React.ReactNode;
}

function TextSection({children}: TextSectionProps)
{
    return <section className={styles.textSection}>{children}</section>;
}

export default TextSection;