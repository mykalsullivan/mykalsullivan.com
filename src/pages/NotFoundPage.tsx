import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";
import Flex from "../components/layout/Flex";

function NotFoundPage(): React.JSX.Element
{
    return (
        <Main>
            <Flex type="col" justify="center">
                <h1 className="text-6xl">Page Not Found...</h1>
                <Link to="/" className="text-base">...Return home?</Link>
            </Flex>
        </Main>
    );
}

export default NotFoundPage;