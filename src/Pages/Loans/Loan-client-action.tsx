import { FC, useState } from "react"
import { Button, Input } from "@material-tailwind/react"
import { ScreenLoader } from "../../utils/screenloader"
import useSubmitData from "../../hooks/useSubmitData"
import { RepaymentStatus } from "../../models/types/RepaymentEnum"

export const LoanClientActions: FC<any>=({loan})=>{
     const { isLoading, submitData } = useSubmitData();
    const [formData, setFormData] = useState<any>({
        repayment_amount:'',
        reference_number:loan.id,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

     const formObject ={
        data: {...formData, loan},
        endpoint: 'repayment/repay',
     }

    
     const submit = async (e:any) => {
        e.preventDefault()
        submitData(formObject)
    }

    const deleteLoan = async () => {
        submitData({
        data:{},
        endpoint:`loans/${loan.reference}/delete`,
        })
    }


    return (
        <>
          {
            loan?.verification_status !== 'pending' ?
          <>
            <ScreenLoader status={isLoading}/>
            <form onSubmit={submit}>
                <div className="flex flex-col w-auto justify-center align-middle text-center">
                  
                    <div className="flex flex-row">
                        <Input
                            crossOrigin={''}
                            label="Repayment Amount"
                            type="number"
                            name="repayment_amount"
                            value={formData.repayment_amount}
                            onChange={handleInputChange}
                            disabled={ parseFloat(loan?.expected_repayment_amount) <= parseFloat( loan?.repayment_sum) ? true : false}
                        />
                        
                        <Button
                            type="submit"
                            placeholder={""}
                            variant="outlined" 
                            disabled ={
                               parseFloat( loan?.expected_repayment_amount) <= 
                              parseFloat( loan?.repayment_sum) ? true : false}
                        >{
                            parseFloat( loan?.expected_repayment_amount) <= 
                            parseFloat( loan?.repayment_sum) ? 
                            "Completed" : "Repay"
                        }</Button>
                    </div>
                </div>
            </form>
          </>
            :
            null
            }
            
             {
                loan.verification_status === RepaymentStatus.pending 
                && 
                <div className="text-center">
                    <Button 
                        placeholder={''}
                        onClick={deleteLoan}
                    >Delete</Button>
                </div>
            }
        </>
    )
}


