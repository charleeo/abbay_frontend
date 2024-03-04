import { useState } from 'react';
import { IApplyLoanFormData } from '../../../models/types/IApplyLoanFormDta';
import { ApplyLoanHTML } from '../../../Pages/Clients/Loans/Apply';
import { ScreenLoader } from '../../../utils/screenloader';
import useSubmitData from '../../../hooks/useSubmitData';

const ApplyLoan = () => {

  const {isLoading,submitData:submit} = useSubmitData()
  const [formData, setFormData] = useState<IApplyLoanFormData>({
    interest_payment_status: '',
    mortgage: '',
    loan_duration_category: '',
    loan_type: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const { mortgage, loan_duration_category, loan_type } = formData

  const submitData = async () => {
      const applicationObject = { mortgage ,loan_durtion_category_id: loan_duration_category, repayment_plan:loan_type }
       submit({
          endpoint:'loans/apply',
          data: {...applicationObject},
          navigationPath:'/applied/loans'
      })
  }

  return (
    <>
      <ScreenLoader status={isLoading} />
      <ApplyLoanHTML
        loanDetils={formData}
        handleEventChange={handleInputChange}
        submit={submitData}
      />
    </>
  );
}

export default ApplyLoan;
