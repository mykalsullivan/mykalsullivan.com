import React from "react";

type ArticleProps =
{
    children?: React.ReactNode;
}

function Article({children}: ArticleProps)
{
    return <article className="max-w-7xl mx-auto p-6">{children}</article>;
}

export default Article;