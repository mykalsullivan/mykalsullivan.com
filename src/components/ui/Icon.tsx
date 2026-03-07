import React from "react";

type IconProps =
{
    src: string;
    alt?: string;
}

function Icon({src, alt = "logo"}: IconProps): React.JSX.Element
{
    return <img
        className="
            h-full
            w-auto
            rounded-2xl
        "
        alt={alt}
        src={src} />;
}

export default Icon;