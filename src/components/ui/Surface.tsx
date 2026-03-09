import React from "react";

type SurfaceProps =
{
    children: React.ReactNode;
}

function Surface({children}: SurfaceProps)
{
    return (
        // Hard-coded for now
        <div className="
                w-full
                h-full
                border-2
                bg-neutral-900
                border-neutral-800
                rounded-lg
            "
        >
            {children}
        </div>
    );
}

export default Surface;