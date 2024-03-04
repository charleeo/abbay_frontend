import React from 'react';

import { Input } from '@material-tailwind/react';

import { ITextField } from '../../models/types/ITextFields';

export const TextField: React.FC<ITextField> = (props) => {
    return (
        <>
            <Input
                type={props.type ?? "text"}
                id={props.id ?? ""}
                placeholder={props.placeholder}
                className={props.class ?? ""}
                {...props.inputTextEvent ?? {}}
                variant={props.variant ?? "standard"}
                label={props.label ?? ""}
                required={props.required ?? false}
                onChange={props.onChange}
                crossOrigin={undefined}
                color='red'
            />
            {props.error && <span className=" text-red-600" >{props.label ?? ""}:  {props.error}</span>}
        </>
    )
}