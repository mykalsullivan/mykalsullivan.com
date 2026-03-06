import React from "react";

type FileInputProps =
{
    onFile: (file: File) => void;
    accept?: string;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>
(
    ({onFile, accept}, ref) =>
    {
        return (
            <input
                type="file"
                accept={accept}
                ref={ref}
                onChange={(e) =>
                {
                    if (e.target.files?.[0]) onFile(e.target.files[0]);
                }}
                style={{display: "none"}}
            />
        );
    }
);

export default FileInput;