import React, {ChangeEventHandler, RefCallback} from "react"
export interface ITextField{
    id?: string
    type?: "password"|"text"|"email"|"number"|"phone"|"date"
    name?: string
    class?: string
    label?: string
    placeholder?:string
    inputTextEvent?: {
        onChange: (ev:any)=>unknown;
        onBlur: (ev:any)=>unknown;
        ref: RefCallback<HTMLInputElement>;
        name: string;
        min?: string | number;
        max?: string | number;
        maxLength?: number;
        minLength?: number;
        pattern?: string;
        required?: boolean;
        disabled?: boolean;
    }
    // onBlur: ChangeHandler;
    // ref: RefCallBack;
   style?:React.CSSProperties
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
    variant?: any
    error?: string | null
    value?: string | any
    onChange?: ChangeEventHandler<HTMLInputElement>
    onBlur?: ChangeEventHandler<HTMLInputElement>
    onKeyUp?: ChangeEventHandler<HTMLInputElement>
    onKeyDown?: ChangeEventHandler<HTMLInputElement>
}