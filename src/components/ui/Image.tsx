import React from "react";

type ImageProps =
{
    src: string;
    alt?: string;
    maintainAspectRatio?: boolean;
}

function Image(
{
    src,
    alt = "image",
    maintainAspectRatio = true
}: ImageProps): React.JSX.Element
{
    const aspectRatioString: string = maintainAspectRatio ? "cover" : "fill";
    return (
        <img
            alt={alt}
            src={src}
            className={`
                w-full
                h-full
                ${aspectRatioString}
            `}
        />
    );
}

export default Image;