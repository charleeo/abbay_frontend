import { ReactEventHandler } from 'react';

type SelelctSVGType = {
    label?: string,
    fieldName: string,
    value?: any,
    changeEvent: ReactEventHandler
    options?: any,
    children?: any
    error?: string | any,
    ref?: string | any,
    required?: boolean | false,
    readonly?: boolean | false,
}

export const SelectSVG = ({ label, fieldName, value, changeEvent, children, error, readonly, required, ref }: SelelctSVGType) => {
    return (
        <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
                {label}
            </label>
            <div className="relative">
                <select
                    name={fieldName}
                    id={fieldName}
                    onChange={changeEvent}
                    value={value}
                    required={required}
                    ref={ref}
                    aria-readonly={readonly}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                >
                    <option value="">Select {label}</option>
                    {children}
                </select>
                {error && <span className=" text-red-600" >{label ?? ""}:  {error}</span>}
            </div>
        </div>
    )
}
