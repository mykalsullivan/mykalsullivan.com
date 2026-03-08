import React from "react";

type ImageProps =
{
    src: string;
    alt?: string;
}

function Image({src, alt = "logo"}: ImageProps): React.JSX.Element
{
    return (
        <img className="
            w-full
            h-full
            rounded-xl
        "
        alt={alt}
        src={src} />
    );
}

export default Image;