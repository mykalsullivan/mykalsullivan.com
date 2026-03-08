import React from "react";

type ArticleProps =
{
    children: React.ReactNode;
    id?: string;
}

function Article({children, id}: ArticleProps): React.JSX.Element
{
    return <article id={id}
        className="
            p-4
        "
    >
        {children}
    </article>;
}

export default Article;