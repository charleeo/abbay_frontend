import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { sumAnArray } from '../../../../services/general';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart  = ({chartData}:any) => {

  const data = {
    labels: ['Loan amount', 'Repayment amount', 'Overdue amount'],
    
    title: "Loans data",
    datasets: [
      { 
        label: '₦'.split(':').join(''),
        data: sumAnArray(chartData ??[]) === 0 ? [1,1,1] : chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 0.5,
      },
    ],
  }
  

  return (
    <div className="w-full h-auto bg-white mt-8">
      <h2>{data.title}</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
