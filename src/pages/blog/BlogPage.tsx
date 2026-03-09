import React from "react";
import {Helmet} from "react-helmet";
import BlogMain from "./sections/BlogMain";

function BlogPage(): React.JSX.Element
{
    return (
        <>
            <Helmet>
                <title>Mykal Sullivan | Blog</title>
                <link rel={"icon"} href={"/assets/images/icons/favicon.png"} />
            </Helmet>
            <BlogMain />
        </>
    );
}

export default BlogPage;