import React from "react";
import Box from "../layout/Box";
import Image from "./Image";

type IconProps =
{
    src: string;
    alt: string;
    size: string;
}

function Icon({src, alt, size}: IconProps): React.JSX.Element
{
    return (
        <Box height={size} width={size}>
            <Image src={`/assets/images/icons/${src}`} alt={alt} />
        </Box>
    );
}

export default Icon;