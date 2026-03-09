import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";
import Column from "../components/layout/Column.tsx";

function NotFoundPage(): React.JSX.Element
{
    return (
        <Main>
            <Column justify="center">
                <h1 className="text-6xl">Page Not Found...</h1>
                <Link to="/" className="text-base">...Return home?</Link>
            </Column>
        </Main>
    );
}

export default NotFoundPage;