import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const BarChart = () => {
  const isScreenWidth = window.innerWidth;

  const data: ChartData<"bar"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [24, 19, 13, 18, 28, 21, 34, 17, 36, 9, 18, 11],
        backgroundColor: "#6b63ffc2",
        borderRadius: 2,
        barPercentage: 0.8,
        barThickness: 22,
        minBarLength: 7,
        // stack: "combined",
      },

      {
        label: "Expense",
        data: [14, 9, 15, 15, 9, 11, 20, 22, 13, 31, 8, 20],
        backgroundColor: "#F7B84B",
        borderRadius: 2,
        barPercentage: 0.8,
        barThickness: 22,
        minBarLength: 7,
        // stack: "combined",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },

    responsive: true,

    maintainAspectRatio: true,

    aspectRatio: isScreenWidth <= 767 ? 0.9 : 2,

    // indexAxis: "y",

    scales: {
      x: {
        border: {
          display: false,
        },

        grid: {
          display: false,
          tickLength: 17,
          tickColor: "transparent",
        },

        ticks: {
          font: {
            family: "'Poppins', sans-serif",
          },
        },

        // stacked: true,
      },

      y: {
        ticks: {
          callback: (value: any) => value + "k",
          stepSize: 5,

          font: {
            family: "'Poppins', sans-serif",
          },
        },

        grid: {
          display: false,
          tickLength: 17,
          tickColor: "transparent",
        },

        // stacked: true,
      },
    },
  };

  return (
    <section className="w-p65 h-32 bg-white rounded p-4">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-medium font-poppins text-darkgrey">
          Revenue against Expense
        </p>

        <div className="flex items-center justify-center gap-2.5">
          <p className="text-0.83 font-medium bg-barchartbg text-barcharttext cursor-pointer p-1.5">
            ALL
          </p>
          <p className="text-0.83 font-medium bg-barchartbg text-barcharttext cursor-pointer p-1.5">
            1M
          </p>
          <p className="text-0.83 font-medium bg-barchartbg text-barcharttext cursor-pointer p-1.5">
            6M
          </p>
          <p className="text-0.83 font-medium bg-barchartbg text-barcharttext cursor-pointer p-1.5">
            1Y
          </p>
        </div>
      </div>

      <Bar data={data} options={options}></Bar>

      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-4 h-4 bg-primarycolour"></div>
          <div className="text-customgrey">Revenue</div>
        </div>

        <div className="flex items-center justify-center gap-2.5">
          <div className="w-4 h-4 bg-lightorange"></div>
          <div className="text-customgrey">Expense</div>
        </div>
      </div>
    </section>
  );
};

export default BarChart;
