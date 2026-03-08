import React from "react";
import Footer from "../../../components/ui/Footer";
import Flex from "../../../components/layout/Flex.tsx";
import Container from "../../../components/layout/Container";

function PortfolioFooter(): React.JSX.Element
{
    return (
        <Footer>
            <Container>
                <Flex justify="between">
                    <p>© 2026 Mykal Sullivan. All rights reserved.</p>
                    <p>Build using React.js + Tailwind.</p>
                </Flex>
            </Container>
        </Footer>
    );
}

export default PortfolioFooter;