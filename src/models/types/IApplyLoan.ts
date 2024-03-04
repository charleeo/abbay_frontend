import React from 'react';

export interface IApplyLoan  {
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    handleSubmit?: React.FormEventHandler<HTMLFormElement>,
    isLoading?:boolean
}