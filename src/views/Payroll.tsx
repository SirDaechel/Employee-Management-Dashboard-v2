import PayrollMetricCard from "../features/payroll/components/PayrollMetricCard";
import triangleArrowUp from "../assets/icons/triangleArrowUp";
import triangleArrowDown from "../assets/icons/triangleArrowDown";
import userIcon from "../assets/icons/userIcon";
import PayrollDate from "../features/payroll/components/PayrollDate";
import SearchBar from "../components/ui/SearchBar";
import PayrollTable from "../features/payroll/components/PayrollTable";
import walletIcon from "../assets/icons/walletIcon";
import timeIcon from "../assets/icons/timeIcon";
import cashIcon2 from "../assets/icons/cashIcon2";
import Pagination from "../components/ui/Pagination";

const Payroll = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="w-full flex items-center justify-between gap-4 m:flex-col">
        <div className="grid grid-cols-r31fr items-center justify-start gap-4 m:flex m:flex-col m:w-full">
          <PayrollMetricCard
            topText={"Total Staffs"}
            icon={userIcon}
            figure={60}
            arrow={triangleArrowDown}
            percentage={"1.01%"}
            percent={"red"}
          />
          <PayrollMetricCard
            topText={"Total Working Hours"}
            icon={timeIcon}
            figure={"2276.25 Hours"}
            arrow={triangleArrowDown}
            percentage={"0.45%"}
            percent={"red"}
          />
          <PayrollMetricCard
            topText={"Payroll Cost"}
            icon={cashIcon2}
            figure={"$857K"}
            arrow={triangleArrowUp}
            percentage={"3.13%"}
            percent={"green"}
          />
          <PayrollMetricCard
            topText={"Net Salary"}
            icon={walletIcon}
            figure={"$812K"}
            arrow={triangleArrowUp}
            percentage={"2.45%"}
            percent={"green"}
          />
          <PayrollMetricCard
            topText={"Deductions"}
            icon={cashIcon2}
            figure={"$45K"}
            arrow={triangleArrowUp}
            percentage={"1.35%"}
            percent={"green"}
          />
          <PayrollMetricCard
            topText={"Statutory Pay"}
            icon={cashIcon2}
            figure={"$10K"}
            arrow={triangleArrowDown}
            percentage={"2.76%"}
            percent={"red"}
          />
        </div>
        <PayrollDate />
      </div>
      <SearchBar placeholder="Search Payroll" />
      <PayrollTable />
      <Pagination />
    </div>
  );
};

export default Payroll;
