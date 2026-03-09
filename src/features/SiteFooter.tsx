import React from "react";
import Footer from "../components/layout/Footer.tsx";
import Container from "../components/layout/Container.tsx";
import Row from "../components/layout/Row.tsx";

function SiteFooter(): React.JSX.Element
{
    return (
        <Footer>
            <Container>
                <Row justify="between">
                    <p>© 2026 Mykal Sullivan. All rights reserved.</p>
                    <p>Build using React.js + Tailwind.</p>
                </Row>
            </Container>
        </Footer>
    );
}

export default SiteFooter;