import React from "react";
import Row from "../layout/Row";
import Icon from "./Icon";

function Logo(): React.JSX.Element
{
    return (
        <a className="
            pr-4
            no-underline
            rounded-xl
            bg-neutral-900
            border
            border-neutral-700
        "
        href="#">
            <Row>
                <Icon src="/assets/images/favicon.png" alt="logo" />
                <span className="text-xl font-bold">Mykal Sullivan</span>
            </Row>
        </a>
    );
}

export default Logo;