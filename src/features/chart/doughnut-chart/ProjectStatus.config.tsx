import { projectStatusLabel, projectStatusDataset } from "../index";
import type { ChartData, ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const isScreenWidth = window.innerWidth;

export const data: ChartData<"doughnut"> = {
  labels: projectStatusLabel,
  datasets: projectStatusDataset,
};

export const options: ChartOptions<"doughnut"> = {
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

  // aspectRatio: isScreenWidth <= 767 ? 1 : 1,
  aspectRatio:
    isScreenWidth <= 1023 && isScreenWidth >= 768
      ? 1.5
      : isScreenWidth <= 1279 && isScreenWidth >= 1024
      ? 2
      : 1,

  scales: {
    x: {
      border: {
        display: false,
      },

      grid: {
        display: false,
      },

      ticks: {
        display: false,
      },
    },

    y: {
      border: {
        display: false,
      },

      ticks: {
        display: false,
      },

      grid: {
        display: false,
      },
    },
  },
};

export const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart: any) {
    const { ctx } = chart;

    ctx.save(),
      (ctx.font = "normal 1rem Poppins"),
      (ctx.fillStyle = "#272727"),
      (ctx.textAlign = "center"),
      (ctx.textBaseline = "middle"),
      ctx.fillText(
        "Projects: 21",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
  },
};
