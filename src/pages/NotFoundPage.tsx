import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/layout/Hero";
import Box from "../components/layout/Box";
import Column from "../components/layout/Column";

function NotFoundPage(): React.JSX.Element
{
    return (
        <main>
            <Hero>
                <Box height="50vh">
                    <Column justify="center">
                        <h1 className="text-6xl">Page Not Found...</h1>
                        <Link to="/" className="text-base">...Return home?</Link>
                    </Column>
                </Box>
            </Hero>
        </main>
    );
}

export default NotFoundPage;