import React from "react";
import styles from "./Logo.module.css";

type LogoProps =
{
    alt?: string;
    src: string;
}

function Logo({alt = "Logo", src}: LogoProps): React.JSX.Element
{
    return (
        <div className={styles.logo}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Logo;