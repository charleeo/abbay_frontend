import useGetData from "../../hooks/useGetData.ts";
import http from "../../services/httpServices.ts";
import { ApprovedSVG } from "./DashboardComponents/SVGs/ApprovedSVG.tsx";
import BarChartComponent from "./DashboardComponents/Charts/BarChartComponent.tsx";
import DashboardCard from "./DashboardComponents/Cards/DashboardCard.tsx";
import { PendingSVG } from "./DashboardComponents/SVGs/PendingSVG.tsx";
import { TotalSVG } from "./DashboardComponents/SVGs/TotalSVG.tsx";
import { DeclinedSVG } from "./DashboardComponents/SVGs/DeclinedSVG.tsx";
import { OverdueSVG } from "./DashboardComponents/SVGs/Overdue.tsx";
import { TotalAppSVG } from "./DashboardComponents/SVGs/TotalAppSVG.tsx";
import PieChart from "./DashboardComponents/Charts/PieChartComponents.tsx";
import DoughnutChart from "./DashboardComponents/Charts/DoughnutComponent.tsx";
import {  useState } from "react";
import { ChartYearSelection } from "./DashboardComponents/Charts/ChartYearSelection.tsx";

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { data } = useGetData({
    url: `${http.setURL}loan-data/counts?year=${selectedYear}`,
    method: "get",
    headers: http.setJwtHeaders().headers,
  });


   const {  data:barChartData, refetch } = useGetData({
    url: `${http.setURL}loan-data/charts/data?year=${selectedYear}`,
    method: "get",
    headers: http.setJwtHeaders().headers,
  })

  const handleSelect = (year:number) => {
    setSelectedYear(year)
    refetch(`${http.setURL}loan-data/charts/data?year=${year}`)
    refetch(`${http.setURL}loan-data/counts?year=${selectedYear}`)
  };

  const totalLoanApplications = (): number => {
    const pending = data?.data?.pending;
    const approved = data?.data?.approved;
    const declined = data?.data?.declined;
    const reviewed = data?.data?.reviewed;
    return pending + approved + declined + reviewed;
  }


  const setDoughnutData = (): number[] => {
    return [
          data?.data?.sumOfApproved?.expected_repayment_amount,
          data?.data?.sumOfApproved?.repayment_sum,
          data?.data?.overDue
       ]
  }

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          <DashboardCard
            value={totalLoanApplications()}
            title="Total Applications"
          >
            <TotalSVG />
          </DashboardCard>

          <DashboardCard
            value={data?.data?.approved}
            title={"Total Approved Loans"}
          >
            <ApprovedSVG />
          </DashboardCard>

          <DashboardCard
            value={data?.data?.pending}
            title={"Total Pending Loans"}
          >
            <PendingSVG />
          </DashboardCard>

          <DashboardCard
            value={data?.data?.declined}
            title={"Total Declined Loans"}
          >
            <DeclinedSVG />
          </DashboardCard>

          <DashboardCard
            value={data?.data?.overDue}
            title={"Total  Overdue"}
            classType="text-red-500"
            nairaSign="&#8358;"
          >
            <OverdueSVG />
          </DashboardCard>

          <DashboardCard
            value={data?.data?.reviewed}
            title={"Total Reviewed Loans"}
          >
            <TotalAppSVG />
          </DashboardCard>
        </div>

        <div className="text-left">
          <ChartYearSelection
            selectedYear = {selectedYear}
            handleSelect = {handleSelect}
          />
        </div>

        <div className="flex flex-row gap-10 mt-4 justify-center">
          <div className="relative overflow-x-auto sm:rounded-lg p-5">
            <div>
              <PieChart
                selectedYear ={selectedYear}
                chartData = {barChartData?.data?.countArray}
               />
            </div>
          </div>
          <div className="relative overflow-x-auto sm:rounded-lg p-5">
            <div>
              <DoughnutChart
                chartData = {setDoughnutData()}
                selectedYear = {selectedYear}
               />
            </div>
          </div>
        </div>

        <div className="">
          <BarChartComponent
            selectedYear = {selectedYear}
            data = {barChartData}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
