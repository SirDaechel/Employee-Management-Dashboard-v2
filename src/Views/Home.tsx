import ProjectFinanceCard from "../Components/ProjectFinanceCard";
import arrowup from "../assets/icons/triangleArrowUp";
import arrowdown from "../assets/icons/triangleArrowDown";
import BarChart from "../Components/Barchart";
import StaffsCountChart from "../Components/StaffsCountChart";
import ProjectCompletionChart from "../Components/ProjectCompletionChart";
import ProjectDeadline from "../Components/ProjectDeadline";

const Home = () => {
  return (
    <section className="flex flex-col gap-8 mt-8">
      <div className="flex items-center justify-between">
        <ProjectFinanceCard
          topText={"Net spend per project"}
          spend={"₦465.5k"}
          percentageText={"16.24%"}
          arrow={arrowdown}
          percent={"red"}
        />

        <ProjectFinanceCard
          topText={"Avg. income per project"}
          spend={"₦924k"}
          percentageText={"4.76%"}
          arrow={arrowup}
          percent={"green"}
        />

        <ProjectFinanceCard
          topText={"Avg. spend per project"}
          spend={"₦101.2k"}
          percentageText={"10.45%"}
          arrow={arrowdown}
          percent={"red"}
        />

        <ProjectFinanceCard
          topText={"Total stipend payout"}
          spend={"₦189.67M"}
          percentageText={"6.91%"}
          arrow={arrowup}
          percent={"green"}
        />
      </div>

      <div className="flex items-start justify-between gap-4 overflow-hidden">
        <BarChart />
        <StaffsCountChart />
      </div>

      <div className="flex items-start justify-start gap-12 overflow-hidden">
        <ProjectCompletionChart />
        <ProjectDeadline />
      </div>
    </section>
  );
};

export default Home;
