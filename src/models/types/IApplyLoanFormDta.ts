export interface IApplyLoanFormData{
    mortgage: any,
    loan_duration_category?: any,
    loan_type?: string|any,
    interest_payment_status?: string|any
    
}


export const  INITIAL_DATA: IApplyLoanFormData = {
    mortgage: null,
    loan_duration_category: "",
    loan_type: '',
    interest_payment_status: '',
}
