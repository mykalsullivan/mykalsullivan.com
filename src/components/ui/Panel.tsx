import React from "react";

type PanelProps =
{
    title: string,
    children?: React.ReactNode,
    actions?: React.ReactNode,
    collapsible?: boolean
}

function Panel(
    {title = "Panel",
    children,
    actions,
    collapsible = false
    } : PanelProps): React.JSX.Element
{
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div className="">
            <div className="">
                <span className="">{title}</span>
                <div className="">
                    {actions}
                    {collapsible && (
                        <button onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? "+" : "-"}
                        </button>
                    )}
                </div>
            </div>

            {!collapsed && (
                <div className="">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Panel;