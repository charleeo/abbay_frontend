import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart  = ({lineChartData, selectedYear}:any) => {

  const data = {
    labels: Object.keys(lineChartData?.data?.approved ?? {}),
    datasets: [
      {
        label: `${selectedYear} Approved Amount`,
        data:  Object.values(lineChartData?.data?.approved ?? {}),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: `${selectedYear} Repaid Amount`,
        data:Object.values(lineChartData?.data?.repaid ?? {}),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
    ],
  };
  
  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Approved Vs Declined Loans',
      },
    },
    scales: {
      y: {
          type: "linear",
          ticks: {
            beginAtZero: true,
          },
        },
      x: {
          type: "category",
          ticks: {
            beginAtZero: true,
          },
        },
    },
  };

  

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-md mt-8">
      <Line data={data} options={options} width={500} height={350}/>
    </div>
  );
};

export default LineChart;
