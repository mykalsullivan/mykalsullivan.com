import React from "react";

type ClusterProps =
{
    children: React.ReactNode;
    gap?: string;
}

function Cluster({children, gap = "gap-3"}: ClusterProps): React.JSX.Element
{
    return (
        <div className={`flex flex-wrap items-center ${gap}`}>
            {children}
        </div>
    );
}

export default Cluster;