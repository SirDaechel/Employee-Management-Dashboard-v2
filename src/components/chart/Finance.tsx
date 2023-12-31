import { Bar } from "react-chartjs-2";
import { data, options } from "../../features/chart/barchat/Finance.config";

const BarChart: React.FC = () => {
  return (
    <section className="w-p65 h-32 bg-white rounded p-4 m:w-full m:h-fit xl:w-full xl:h-fit xxl:w-full xxl:h-fit">
      <div className="flex items-center justify-between mb-8 gap-4">
        <p className="text-base ss:text-xs font-medium font-poppins text-darkgrey">
          Revenue against Expense
        </p>

        <div className="flex items-center justify-center gap-2.5">
          <p className="text-0.83 ss:text-0.6 font-medium bg-barchartbg text-primarycolour cursor-pointer p-1.5 hover:bg-primarycolour hover:text-white transition">
            ALL
          </p>
          <p className="text-0.83 ss:text-0.6 font-medium bg-barchartbg text-primarycolour cursor-pointer p-1.5 hover:bg-primarycolour hover:text-white transition">
            1M
          </p>
          <p className="text-0.83 ss:text-0.6 font-medium bg-barchartbg text-primarycolour cursor-pointer p-1.5 hover:bg-primarycolour hover:text-white transition">
            6M
          </p>
          <p className="text-0.83 ss:text-0.6 font-medium bg-barchartbg text-primarycolour cursor-pointer p-1.5 hover:bg-primarycolour hover:text-white transition">
            1Y
          </p>
        </div>
      </div>

      <Bar data={data} options={options}></Bar>

      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-4 h-4 bg-primarycolour"></div>
          <p className="text-customgrey ss:text-sm">Revenue</p>
        </div>

        <div className="flex items-center justify-center gap-2.5">
          <div className="w-4 h-4 bg-lightorange"></div>
          <p className="text-customgrey ss:text-sm">Expense</p>
        </div>
      </div>
    </section>
  );
};

export default BarChart;
