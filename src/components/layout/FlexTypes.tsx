import React from "react";

export const justifyMap: any = Object.freeze(
{
    between: "justify-between",
    center: "justify-center",
    evenly: "justify-evenly",
    start: "justify-start",
    end: "justify-end"
});

export const alignMap: any = Object.freeze(
{
    start: "items-start",
    center: "items-center",
    end: "items-end"
});

export const itemsMap: any = Object.freeze(
{
    start: "items-start",
    center: "items-center",
    end: "items-end"
});

export const gapMap: Record<number, string> =
{
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8"
};

export type FlexProps =
{
    children: React.ReactNode;
    justify?: "between" | "center" | "evenly" | "start" | "end";
    align?: "start" | "center" | "end";
    items?: "start" | "center" | "end";
    gap?: number;
    wrap?: boolean;
    overflow?: boolean;
}