import { Doughnut } from "react-chartjs-2";
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

const ProjectCompletionChart = () => {
  const isScreenWidth = window.innerWidth;

  const data: ChartData<"doughnut"> = {
    labels: ["Completed", "In Progress", "Pending"],

    datasets: [
      {
        label: "Rate",
        data: [56, 29, 15],
        backgroundColor: ["#6C63FF", "#F1C93B", "grey"],
        type: "doughnut",
        hoverOffset: 4,
        spacing: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
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

  return (
    <section className="relative w-80 h-25.5 bg-white rounded p-4 m:w-full m:h-fit">
      <p className="text-base font-medium font-poppins text-darkgrey mb-4">
        Project Completion Rate
      </p>

      <Doughnut
        data={data}
        options={options}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Doughnut>

      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center justify-center gap-2">
          <div className="completed_projects_label_colour w-4 h-4 bg-primarycolour"></div>
          <div className="text-xs">Completed</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="inprogress_projects_label_colour w-4 h-4 bg-lightorange"></div>
          <div className="text-xs">In Progress</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="pending_projects_label_colour w-4 h-4 bg-lightgrey"></div>
          <div className="text-xs">Pending</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCompletionChart;
