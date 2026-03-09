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
            py-4
            w-full
        "
    >
        {children}
    </article>;
}

export default Article;