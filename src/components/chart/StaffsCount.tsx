import { Doughnut } from "react-chartjs-2";
import {
  data,
  options,
  textCenter,
} from "../../features/chart/doughnut-chart/StaffsCount.config";

const StaffsCount: React.FC = () => {
  return (
    <div className="relative w-p35 h-32 bg-white rounded p-4 overflow-y-auto m:w-full m:h-fit xl:w-full xl:h-fit xxl:w-full xxl:h-fit">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-medium font-poppins text-darkgrey ss:text-xs">
          Employee Summary
        </p>
      </div>

      <Doughnut
        // height="300"
        data={data}
        options={options}
        plugins={[textCenter]}
      ></Doughnut>
    </div>
  );
};

export default StaffsCount;
