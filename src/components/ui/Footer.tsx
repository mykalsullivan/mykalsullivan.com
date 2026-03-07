import React from "react";
import Row from "../layout/Row.tsx";
import Column from "../layout/Column.tsx";

function Footer(): React.JSX.Element
{
    return (
        <footer className="flex w-full justify-center">
            <div className="w-full mx-4 mt-6 mb-2 p-2 text-gray-500">
                <Row>
                    <Column>
                        <></>
                    </Column>
                    <Column>
                        <p>© 2026 Mykal Sullivan. All rights reserved.</p>
                    </Column>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;