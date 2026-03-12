import React from "react";
import Container from "../components/layout/Container";
import Row from "../components/layout/Row";

function BackgroundGradient(): React.JSX.Element
{
    return (
        <div className="relative">
            <div className="
                    absolute
                    bottom-0
                    -z-20
                    w-full
                    h-300
                    bg-linear-to-b
                    from-transparent
                    to-gray-600/20
                " />
        </div>
    );
}

function SiteFooter(): React.JSX.Element
{
    return (
        <footer className="
            text-neutral-500
        ">
            <Container>
                <Row justify="between">
                    <p>Built using React.js + Tailwind. All logos belong to their respective copyright holders.</p>
                    <p>© 2026 Mykal Sullivan. All rights reserved.</p>
                </Row>
            </Container>
            <BackgroundGradient />
        </footer>
    );
}

export default SiteFooter;