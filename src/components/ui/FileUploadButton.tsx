import React from "react";
import styles from "./Button.module.css";
import Button from "./Button.tsx";
import FileInput from "./FileInput.tsx";

type FileUploadButtonProps =
{
    onFile: (file: File) => void;
    accept?: string;
    label?: string;
}

function FileUploadButton({onFile, accept, label = "Upload..."}: FileUploadButtonProps): React.JSX.Element
{
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () =>
    {
        inputRef.current?.click();
    };

    return (
        <>
            <Button onClick={handleClick}>{label}</Button>
            <FileInput
                ref={inputRef}
                accept={accept}
                onFile={onFile}
            />
        </>
    );
}

export default FileUploadButton;