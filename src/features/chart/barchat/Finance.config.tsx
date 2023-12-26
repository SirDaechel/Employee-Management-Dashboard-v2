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

const isScreenWidth = window.innerWidth;

export const data: ChartData<"bar"> = {
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
      barThickness:
        isScreenWidth <= 767
          ? 10
          : isScreenWidth >= 768 && isScreenWidth <= 1023
          ? 15
          : 22,
      minBarLength: 7,
      // stack: "combined",
    },

    {
      label: "Expense",
      data: [14, 10, 15, 15, 9, 11, 20, 22, 13, 31, 8, 20],
      backgroundColor: "#F7B84B",
      borderRadius: 2,
      barPercentage: 0.8,
      barThickness:
        isScreenWidth <= 767
          ? 10
          : isScreenWidth >= 768 && isScreenWidth <= 1023
          ? 15
          : 22,
      minBarLength: 7,
      // stack: "combined",
    },
  ],
};

export const options: ChartOptions<"bar"> = {
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

  aspectRatio: isScreenWidth <= 767 ? 1.05 : 2,

  // indexAxis: "y"

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
