import React from "react";

type InputProps =
{
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

function Input({value, onChange, placeholder}: InputProps): React.JSX.Element
{
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;