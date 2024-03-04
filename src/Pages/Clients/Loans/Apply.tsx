import { useState } from "react";

import Logo from "../../../assets/images/Revenue-bro.png";
import useGetData from "../../../hooks/useGetData";
import http from "../../../services/httpServices";
import { SelectSVG } from "../../../utils/fields/SVGs/SelectSVG";
import GeneralModal from "../../../utils/modals/general";
import { thousandFormat } from "../../../utils/parse-numbers-to-thousand";

export const ApplyLoanHTML = ({
  loanDetils,
  handleEventChange,
  submit,
}: any) => {

  const url = http.setURL + "config/get/loan/dependencies";
  const { data } = useGetData({
    url,
    method: "get",
    headers: {},
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<any>({
    mortgage_error:'',
    loan_type_error:'',
    loan_duration_error:'',
  });

  const [duration, setDuration] = useState<any>(null);
  const [loanType, setloanType] = useState<any>(null);
  const [mortgage, setMortgage] = useState<any>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoanSubmission = (e: any) => {
    e.preventDefault();

    if(!loanDetils.mortgage){
      setErrors({mortgage_error:"Mortgage field is required"})
      return
    }

    if( !loanDetils.loan_duration_category){
      setErrors({loan_duration_error:"Duration category is required"})
      return
    }
    if( !loanDetils.loan_type){
      setErrors({loan_type_error:"Mortgage plan is required"})
      return
    }

    setIsModalOpen(true);
    filterDuration(loanDetils.loan_duration_category);
    filterLoanType(loanDetils.loan_type);
    filterMortgage(loanDetils.mortgage);
  };

  const filterDuration = (selected: number) => {
    const result = data?.data?.loan_duration.filter(
      (result: any) => result.id == selected
    );
    setDuration(result[0]);
  }

  const filterLoanType = (selected: number) => {
    const result = data?.data?.loan_type.filter(
      (result: any) => result.id == selected
    );
    setloanType(result[0]);
  };

  const filterMortgage = (selected: any) => {
    const result = data?.data?.mortgages?.filter(
      (result: any) => result.id == selected
    );
    setMortgage(result[0]);
  };
  const calculateInterest =(amount:number, rate:number)=>
  {
     amount = parseFloat(amount as any)
     const interest : number = ( amount * rate) / 100
     return amount + interest
  }

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <p className="2xl:px-20">
                You're welcome to Abbey Mortgage Center!
              </p>

              <span className="mt-15 inline-block">
                <img src={Logo} alt="LoanImg" className="w-100" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h4 className="mb-3 text-center font-bold text-black dark:text-white sm:text-title-xl2">
                Fill the mortgage  form
              </h4>

              <form onSubmit={handleLoanSubmission}>

                <SelectSVG
                  fieldName="mortgage"
                  label="Mortgage"
                  value={ loanDetils.mortgage}
                  changeEvent={handleEventChange}
                  error={errors.mortgage_error}
                >
                  {data
                    ? data?.data?.mortgages?.map((mortgage: any) => (
                        <option key={mortgage.id} value={mortgage.id}>
                          {mortgage.name} | Price: { thousandFormat( mortgage.price??0)}
                        </option>
                      ))
                    : ""}
                </SelectSVG>

                <SelectSVG
                  fieldName="loan_duration_category"
                  label="Mortgage Duration"
                  value={ loanDetils.loan_duration_category}
                  changeEvent={handleEventChange}
                  error={errors.loan_duration_error}
                >
                  {data
                    ? data?.data?.loan_duration?.map((duration: any) => (
                        <option key={duration.id} value={duration.id}>
                          {duration.category_name}
                        </option>
                      ))
                    : ""}
                </SelectSVG>

                <SelectSVG
                  fieldName="loan_type"
                  label="Mortgage Plan"
                  value={loanDetils?.loan_type}
                  changeEvent={handleEventChange}
                  error={errors.loan_type_error}
                >
                  {data
                    ? data.data?.loan_type?.map((type: any) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))
                    : ""}
                </SelectSVG>

                <div className="mb-5">
                  <button
                    type="submit"
                    defaultValue="Request Loan"
                    className=" cursor-pointer rounded-lg border border-primary bg-primary px-1 text-white transition hover:bg-opacity-90"
                  >Apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modaal area */}
      <GeneralModal
        title={""}
        showModal={isModalOpen}
        setShowModal={closeModal}
      >
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">
            Please review your loan details:
          </h2>
          <div className="flex justify-center">
          <table className="w-auto mb-2 bg-white border-0 rounded-lg dark:bg-gray-700 border-blue-200 dark:text-white">
              <tbody className="text-left text-sm font-medium text-gray-900">
                
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Base Amount:</td>
                  <td className="px-4 py-2 border-b border-blue-200">₦ {
                    thousandFormat( mortgage?.price?? 0)
                  }</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Total Amount:</td>
                  <td className="px-4 py-2 border-b border-blue-200">₦ { 
                  thousandFormat(calculateInterest(mortgage?.price, mortgage?.interest) as any)
                  }</td>
                </tr>
                
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment Duration:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{duration?.category_name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment Plan:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{loanType?.name}</td>
                </tr>
              </tbody>
            </table>
          </div>

       
         
          <button
            onClick={submit}
            className={`w-auto rounded-lg border border-primary p-2 text-white transition bg-primary ${
               "cursor-pointer hover:bg-opacity-90 bg-blue-700 hover:bg-blue-800"
            } rounded-md border-blue-500 focus:outline-none focus:ring focus:border-blue-300`}
          >
            Process
          </button>
          
        </div>
      </GeneralModal>
    </>
  );
};
