import {ChangeEvent} from "react";

export type TypeInputFormProps = {
    label: string,
    placeholder: string
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void,
}

export type TypeTaskDescriptionsProps = {
    description: string,
    title: string
}
