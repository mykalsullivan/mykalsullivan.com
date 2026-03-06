import React from "react";
import styles from "./ButtonGroup.module.css";
import Button from "../ui/Button.tsx";
import FileUploadButton from "../ui/FileUploadButton.tsx";

type ButtonLike = React.ReactElement<{className?: string; children?: React.ReactNode}>;

type ButtonGroupProps =
{
    children: ButtonLike[];
}

function ButtonGroup({children}: ButtonGroupProps)
{
    React.Children.forEach(children, child =>
    {
        if (React.isValidElement(child) &&
            child.type !== Button &&
            child.type !== FileUploadButton)
        {
            throw new Error("ButtonGroup only accepts Button elements as children");
        }
    });
    return <div className={styles.buttonGroup}>{children}</div>
}

export default ButtonGroup;