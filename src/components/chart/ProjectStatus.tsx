import { Doughnut } from "react-chartjs-2";
import {
  data,
  options,
  textCenter,
} from "../../features/chart/doughnut-chart/ProjectStatus.config";

const ProjectStatus: React.FC = () => {
  return (
    <section className="relative w-80 h-25.5 bg-white rounded p-4 m:w-full m:h-fit xl:w-full xl:h-fit xxl:w-full xxl:h-fit">
      <p className="text-base font-medium font-poppins text-darkgrey mb-4 ss:text-xs">
        Project Completion Rate
      </p>

      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>

      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center justify-center gap-2">
          <div className="completed_projects_label_colour w-4 h-4 bg-primarycolour"></div>
          <div className="text-xs ss:text-0.6">Completed</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="inprogress_projects_label_colour w-4 h-4 bg-lightorange"></div>
          <div className="text-xs ss:text-0.6">In Progress</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="pending_projects_label_colour w-4 h-4 bg-lightgrey"></div>
          <div className="text-xs ss:text-0.6">Pending</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatus;
