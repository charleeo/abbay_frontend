import { FC } from "react"
import { Loan } from "../../../models/types/LoanType"
import { parseDate } from "../../../utils/parse-date"
import { LoanClientActions } from "../Loan-client-action"

export const LoanDetails: FC< Partial<Loan>>=({data})=>{
    return (
        <>
            <LoanClientActions
              loan ={data}
            />
          <div className="flex justify-center">
            <table className="w-auto m-2 border bg-gray-700 border-blue-100">
              <tbody className="text-left text-sm font-medium text-gray-900">
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Mortgage Amount:</td>
                  <td className="px-4 py-2 border-b border-blue-200">&#x20A6;{data.amount}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Mortgage Interest:</td>
                  <td className="px-4 py-2 border-b border-blue-200">&#x20A6;{data.interest}</td>
                </tr>
                
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Mortgage Approval Date:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{parseDate(data.issue_date)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Mortgage Duration Category:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{data.loan_duration_category.category_name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Cumulative Repayment:</td>
                  <td className="px-4 py-2 border-b border-blue-200">&#x20A6;{data.repayment_sum}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment Amount:</td>
                  <td className="px-4 py-2 border-b border-blue-200">&#x20A6;{data.expected_repayment_amount}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment Rate:</td>
                  <td className="px-4 py-2 border-b border-blue-200">&#x20A6;{data.repayment_rate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment Start Date:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{parseDate(data.repayment_start_date)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Repayment End Date:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{parseDate(data.repayment_due_date)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-blue-200">Approval Status:</td>
                  <td className="px-4 py-2 border-b border-blue-200">{data.verification_status}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </>
    )
}


