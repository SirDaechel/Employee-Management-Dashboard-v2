import ProjectFinanceCard from "../components/card/ProjectFinanceCard";
import arrowup from "../assets/icons/triangleArrowUp";
import arrowdown from "../assets/icons/triangleArrowDown";
import BarChart from "../components/chart/Barchart";
import StaffsCountChart from "../components/chart/StaffsCountChart";
import ProjectCompletionChart from "../components/chart/ProjectCompletionChart";
import ProjectDeadline from "../components/ProjectDeadline";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between m:flex-col m:gap-4">
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

      <div className="flex items-start justify-between gap-4 overflow-hidden m:flex-col">
        <BarChart />
        <StaffsCountChart />
      </div>

      <div className="flex items-start justify-start gap-12 overflow-hidden m:flex-col">
        <ProjectCompletionChart />
        <ProjectDeadline />
      </div>
    </section>
  );
};

export default Home;
