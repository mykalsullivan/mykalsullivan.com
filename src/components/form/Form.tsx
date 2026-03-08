import React from "react";

type FormProps =
{
    children: React.ReactNode;
}

function Form({children}: FormProps): React.JSX.Element
{
    return (
        <form>
            {children}
        </form>
    );
}

export default Form;