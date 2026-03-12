import React from "react";

type BoxProps =
{
    children?: React.ReactNode;

    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;

    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;

    padding?: string;
    margin?: string;
    rounded?: string;
    overflow?: string;
};


function Box(
{
    children,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding,
    margin,
    rounded,
    overflow,
}: BoxProps): React.JSX.Element
{
    const style: React.CSSProperties = {};

    if (width !== undefined) style.width = typeof width === "number" ? `${width}px` : width;
    if (minWidth !== undefined) style.minWidth = typeof minWidth === "number" ? `${minWidth}px` : minWidth;
    if (maxWidth !== undefined) style.maxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;

    if (height !== undefined) style.height = typeof height === "number" ? `${height}px` : height;
    if (minHeight !== undefined) style.minHeight = typeof minHeight === "number" ? `${minHeight}px` : minHeight;
    if (maxHeight !== undefined) style.maxHeight = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;

    return (
        <div
            style={style}
            className={`${padding ?? ""} ${margin ?? ""} ${rounded ?? ""} ${overflow ?? ""}`}
        >
            {children}
        </div>
    );
}

export default Box;