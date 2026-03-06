import React from "react";
import styles from "./Button.module.css";

type ButtonProps<T extends React.ElementType> =
{
    as?: T;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
} & React.ComponentPropsWithoutRef<T>;

function Button<T extends React.ElementType = "button">
(
    {
        as,
        children,
        disabled,
        ...rest
    }: ButtonProps<T>): React.JSX.Element
{
    const Component = as || "button";

    return (
        <Component
            className={styles.button}
            disabled={Component === "button" ? disabled : undefined}
            aria-disabled={Component !== "button" ? disabled : undefined}
            {...rest}
        >
            {children}
        </Component>
    );
}

export default Button;