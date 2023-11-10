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

const HeadCountPieChart: React.FC = () => {
  const isScreenWidth = window.innerWidth;

  const data: ChartData<"doughnut"> = {
    labels: [
      "Data Analyst",
      "UI/UX Designer",
      "Full Stack Developer",
      "Data Scientist",
      "Product Manager",
      "Frontend Developer",
      "Technical Writer",
      "Innovation Specialist",
      "Quality Assurance Tester",
      "Billing/Invoicing Specialist",
      "Auditor",
      "Graphic Designer",
      "Technical Support",
      "Cyber Security",
      "Moderator",
      "Cloud Engineer",
      "Human Resources",
      "Video Editor",
      "Animator",
      "App Developer",
      "Motion Graphics",
      "Administrator",
    ],

    datasets: [
      {
        label: "Staffs",
        data: [
          3, 4, 2, 5, 7, 2, 6, 8, 1, 3, 5, 2, 5, 6, 2, 3, 4, 4, 7, 8, 1, 4,
        ],
        backgroundColor: [
          "#6b63ffc2",
          "#FF0060",
          "aqua",
          "orange",
          "#FFA1F5",
          "#016A70",
          "#D2DE32",
          "#A73121",
          "#96C291",
          "#5C5470",
          "#504099",
          "#900C3F",
          "#DFCCFB",
          "#C8AE7D",
          "#DFA878",
          "#FFCACC",
          "#9BCDD2",
          "#EF6262",
          "#F1C93B",
          "#4A55A2",
          "#A2FF86",
          "#898121",
        ],
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

    aspectRatio:
      isScreenWidth <= 1023 && isScreenWidth >= 768
        ? 1.5
        : isScreenWidth <= 1279 && isScreenWidth >= 1024
        ? 2
        : 1,
    // aspectRatio: isScreenWidth <= 767 ? 1 : 1,

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
    <div className="relative w-p35 h-32 bg-white rounded p-4 overflow-y-auto m:w-full m:h-fit">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-medium font-poppins text-darkgrey">
          Employee Summary
        </p>

        {/* <p className="total_staff">Total Staffs: {users.length}</p> */}
      </div>

      <Doughnut height="300" data={data} options={options}></Doughnut>
    </div>
  );
};

export default HeadCountPieChart;
