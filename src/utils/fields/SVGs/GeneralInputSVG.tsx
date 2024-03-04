import { ReactEventHandler } from 'react';

type InputSVGType = {
    label?: string,
    type?: string | "text",
    fieldName: string,
    value?: any,
    changeEvent?: ReactEventHandler,
    required?: boolean | false
    error?: string | any
    blureEvent?:ReactEventHandler,
    onkeyUp?:ReactEventHandler,
    disable?:boolean
    maxLength?:number
    minLength?:number
}

export const GeneralInputSVG = ({ label, type, fieldName, value, changeEvent, required, error, blureEvent,disable,onkeyUp,maxLength,minLength }: InputSVGType) => {

    return (
        <div className="mb-5.5">
            <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor={fieldName}
            >
                {label}
            </label>
            <input
                className="w-full rounded border border-stroke bg-gray-50 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type={type}
                name={fieldName}
                id={fieldName}
                placeholder={`Please enter ${fieldName.split('_').join(' ')}`}
                value={value}
                onChange={changeEvent}
                autoComplete={fieldName}
                required={required}
                onBlur={blureEvent}
                disabled ={disable}
                onKeyUp={onkeyUp}
                maxLength={maxLength}
                minLength={minLength}
            />
            {error && <span className=" text-red-600" >{label ?? ""}:  {error}</span>}
        </div>
    )
}