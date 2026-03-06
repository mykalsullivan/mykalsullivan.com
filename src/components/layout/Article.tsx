import React from "react";
import styles from "./Article.module.css";

type ArticleProps =
{
    children?: React.ReactNode;
}

function Article({children}: ArticleProps)
{
    return <article className={styles.article}>{children}</article>;
}

export default Article;