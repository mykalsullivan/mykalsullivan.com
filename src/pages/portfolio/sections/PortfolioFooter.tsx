import React from "react";
import Footer from "../../../components/ui/Footer";
import Row from "../../../components/layout/Row";
import Container from "../../../components/layout/Container";

function PortfolioFooter(): React.JSX.Element
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

export default PortfolioFooter;