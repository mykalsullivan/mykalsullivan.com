import React from "react";

type FormFieldProps =
{
    children: React.ReactNode;
    title: string;
}

function FormField({children, title}: FormFieldProps): React.JSX.Element
{
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default FormField;