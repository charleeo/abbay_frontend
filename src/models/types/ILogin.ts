import React from "react"
// import { ILoginData } from "./ILoginData";
import { ITextField } from "./ITextFields";

export interface ILogin extends   ITextField {
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    handleSubmit?: React.FormEventHandler<HTMLFormElement>,
    isLoading?:boolean
}