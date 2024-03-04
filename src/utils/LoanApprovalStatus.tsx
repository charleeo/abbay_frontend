
export const LoanApprovalData = ({data,value, onChange,required}:any)=>{
    return (
         <select
           className="rounded-lg border border-blue-gray-200 h-10 bg-transparent pl-2 pr-3 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name='status'
            value={value}
            onChange={onChange}
            required = {required? true:false}
        >
            <option value=""> select status</option>
            {data &&
                data.data?.map((value: any) => (
                    <option key={value} value={value}>{value}</option>
                )) 
            }
        </select>
    )
}