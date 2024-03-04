import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { sumAnArray } from '../../../../services/general';
interface IPieChart{
  selectedYear?:number
  chartData?: number[]
}
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart  = ({selectedYear, chartData}:IPieChart) => {

  const defaultData = sumAnArray(chartData??[]) === 0
  ? [1, 1, 1, 1]
  : chartData;

  const data = {
    labels: ['daily', 'weekly', 'monthly', 'yearly'],
    
    title: `Loan Types #${selectedYear}`,
    datasets: [
      {
        label: 'No of items',
        data:  defaultData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  

  return (
    <div className="w-full h-auto bg-white mt-8">
      <h2>{data.title}</h2>
      <Pie data={data}/>
    </div>
  );
};

export default PieChart;
