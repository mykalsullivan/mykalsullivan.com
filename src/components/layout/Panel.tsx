import React from "react";
import styles from "./Panel.module.css";

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
        <div className={styles.panel}>
            <div className={styles.panelHeader}>
                <span className={styles.panelHeaderTitle}>{title}</span>
                <div className={styles.panelActions}>
                    {actions}
                    {collapsible && (
                        <button onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? "+" : "-"}
                        </button>
                    )}
                </div>
            </div>

            {!collapsed && (
                <div className={styles.panelContent}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default Panel;