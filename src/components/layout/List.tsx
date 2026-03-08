import React from "react";

type ListItemProps =
{
    children: React.ReactNode;
}

function ListItem({children}: ListItemProps): React.JSX.Element
{
    return (
        <li>
            {children}
        </li>
    );
}

type ListProps =
{
    children: React.ReactNode;
}

function List({children}: ListProps): React.JSX.Element
{
    return (
        <ul className="
            flex flex-row
            gap-4
        ">
            {children}
        </ul>
    );
}

List.Item = ListItem;

export default List;