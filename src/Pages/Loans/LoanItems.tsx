import React, { useState } from "react";
import GeneralModal from "../../utils/modals/general";
import { Loan, LoanTableProps } from "../../models/types/LoanType";
import { LoanDetails } from "./details/loan-details";
import Breadcrumb from "../../utils/Breadcrumb";
import CoverOne from "../../assets/images/cover/loan.png";
import { LoanFiltersField } from "../../utils/LoanFiltersField";
import { LoanPaginationField } from "../../utils/LoanPaginationField";
import { Input } from "@material-tailwind/react";
import { thousandFormat } from "../../utils/parse-numbers-to-thousand";

const LoanItems: React.FC<LoanTableProps> = ({
  loans, 
  handleInputChange, 
  handleSubmit,
  user 
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<Loan>();

  const openModal = (item: Loan) => {
    setShowModal(!showModal);
    setModalItem(item);
  };

 

  const setPageLink =()=>{
     return !user.is_admin ? "/profile" :''
  }

  return (
    <>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <Breadcrumb pageName="Loans"
             link={setPageLink()}
             linkText="Profile"
             >
          
          </Breadcrumb>
          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="relative z-20 h-35 md:h-65">
              <img
                src={CoverOne}
                alt="profile cover"
                className="h-full w-full rounded-tl-sm rounded-tr-sm object-center p-1"
              />
            </div>
            <div>
              <div className="overflow-x-auto shadow-md sm:rounded-lg p-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pr-4 w-full justify-center"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col m-2">
                      <LoanPaginationField
                        handleInputChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col m-2">
                      <LoanFiltersField handleSearch={handleInputChange} />
                    </div>
                    <div className="flex flex-col m-2">
                      <Input
                        type="number"
                        crossOrigin={""}
                        label="From amount"
                        name="from_amount"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col m-2">
                      <Input
                        type="number"
                        name="to_amount"
                        label="To amount"
                        crossOrigin={""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col items-center pt-2">
                      <button className="text-blue-500 bg-white ml-3">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <table className="min-w-full divide-y divide-blue-100 table-auto border-spacing-3 border border-blue-100">
                  <thead>
                    <tr className="bg-gray">
                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        APPNo.
                      </th>
                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Amount(₦)
                      </th>

                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Total Amount(₦)
                      </th>

                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Repayment Amount(₦)
                      </th>

                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Cummulative Payments(₦)
                      </th>

                     
                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Loan Status
                      </th>
                      <th
                        scope="col"
                        className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-100"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-blue-100">
                    {loans?.map((item) => (
                      <tr key={item.id}>
                        <td className="p-1 text-left px-1 border border-blue-100">
                          {item.reference}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          {thousandFormat(item.amount)}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          {thousandFormat(item.expected_repayment_amount)}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          {thousandFormat(item.repayment_rate)}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          {thousandFormat(item.repayment_sum)}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          {item.verification_status}
                        </td>

                        <td className="p-1 whitespace-nowrap text-left border border-blue-100">
                          <button
                            onClick={() => openModal(item)}
                            className="bg-black text-white px-4 py-2 rounded"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                    {!loans?.length && (
                      <tr>
                        <td colSpan={7}>No Data found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <GeneralModal
          title={"Loan Details"}
          showModal={showModal}
          setShowModal={() => setShowModal(!showModal)}
        >
          <LoanDetails data={modalItem} />
        </GeneralModal>
      )}
    </>
  );
};

export default LoanItems;
