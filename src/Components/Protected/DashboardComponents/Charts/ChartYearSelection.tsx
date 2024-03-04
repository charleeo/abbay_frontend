import { generateYears } from "../../../../services/general"

export const ChartYearSelection = ({handleSelect, selectedYear}:any) => {

    return (
        <div className="w-full max-w mx-auto p-4">
        <div className=" relative">
            <div className="absolute top-0 left-0">
           <label className="p-2 font-bold">
            Select Year:
          </label>
          <select
            className="p-2 border border-blue-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={selectedYear}
            onChange={(e) => handleSelect(parseInt(e.target.value))}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
            </div>

        </div>
      </div>
    )
}