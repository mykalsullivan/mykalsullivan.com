import React from "react";
import Surface from "../components/ui/Surface";
import Form from "../components/form/Form";
import Box from "../components/layout/Box";
import Container from "../components/layout/Container";
import Row from "../components/layout/Row";
import Column from "../components/layout/Column";

function NameFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Name:</p>
            <Surface>
                <div className="
                    h-10
                    bg-neutral-700
                ">
                </div>
            </Surface>
        </Column>
    );
}

function EmailFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Email:</p>
            <Surface>
                <div className="
                    h-10
                    bg-neutral-700
                ">
                </div>
            </Surface>
        </Column>
    );
}

function SubjectFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Subject:</p>
            <Surface>
                <div className="
                    h-10
                    bg-neutral-700
                ">
                </div>
            </Surface>
        </Column>
    );
}

function MessageFormField(): React.JSX.Element
{
    return (
        <Column align="start" gap={2}>
            <p>Message:</p>
            <Surface>
                <div className="
                    h-40
                    bg-neutral-700
                ">
                </div>
            </Surface>
        </Column>
    );
}

function EmailForm(): React.JSX.Element
{
    return (
        <Box width="30rem">
            <Surface>
                <div className="p-8">
                    <h1 className="text-2xl mb-4">Send a message</h1>
                    <Form>
                        <Column>
                            <NameFormField />
                            <EmailFormField />
                            <SubjectFormField />
                            <MessageFormField />
                        </Column>
                    </Form>
                </div>
            </Surface>
        </Box>
    );
}

export default EmailForm;