import React from "react";

type IconProps =
{
    src: string;
    alt?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap: Record<string, string> =
{
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12"
};

function Icon({src, alt = "logo", size = "xl"}: IconProps): React.JSX.Element
{
    return (
        <img className={`
            ${sizeMap[size]}
            rounded-xl
        `}
        alt={alt}
        src={src} />
    );
}

export default Icon;