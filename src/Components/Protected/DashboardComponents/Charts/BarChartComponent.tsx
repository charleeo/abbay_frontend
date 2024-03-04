import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = ({data,selectedYear}:any) => {

  const chartData = {
    labels: Object.keys(data?.data?.approved ?? {}),

    datasets: [
      {
        label: `${selectedYear} Approved Amounts`,
        data: Object.values(data?.data?.approved ?? {}),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "#3C50E0",
        borderWidth: 1,
      },

      {
        label: `${selectedYear} Repaid Amounts`,
        data: Object.values(data?.data?.repaid ?? {}),
        backgroundColor: "#1c8504",
        borderColor: "#3C50E0",
        borderWidth: 1,
      },
    ],
  };

  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Loan Distribution",
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
    <>
      
      <div className="bg-white rounded-lg shadow-md mt-8">
        <Bar options={options} data={chartData} />
      </div>
    </>
  );
};

export default BarChartComponent;
