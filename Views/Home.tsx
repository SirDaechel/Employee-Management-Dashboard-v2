import ProjectFinanceCard from "../Components/ProjectFinanceCard";
import arrowup2 from "../assets/Icons/arrowup2";
import arrowdown2 from "../assets/Icons/arrowdown2";
import BarChart from "../Components/Barchart";
import StaffsCountChart from "../Components/StaffsCountChart";
import ProjectCompletionChart from "../Components/ProjectCompletionChart";

const Home = () => {
  return (
    <section className="flex flex-col gap-8 mt-8">
      <div className="flex items-center justify-between">
        <ProjectFinanceCard
          topText={"Net spend per project"}
          spend={"₦465.5k"}
          percentageText={"16.24%"}
          arrow={arrowdown2}
          percent={"red"}
        />

        <ProjectFinanceCard
          topText={"Avg. income per project"}
          spend={"₦924k"}
          percentageText={"4.76%"}
          arrow={arrowup2}
          percent={"green"}
        />

        <ProjectFinanceCard
          topText={"Avg. spend per project"}
          spend={"₦101.2k"}
          percentageText={"10.45%"}
          arrow={arrowdown2}
          percent={"red"}
        />

        <ProjectFinanceCard
          topText={"Total stipend payout"}
          spend={"₦189.67M"}
          percentageText={"6.91%"}
          arrow={arrowup2}
          percent={"green"}
        />
      </div>

      <div className="flex items-start justify-between gap-4 overflow-hidden">
        <BarChart />
        <StaffsCountChart />
      </div>

      <div className="flex items-start justify-start gap-12">
        <ProjectCompletionChart />
      </div>
    </section>
  );
};

export default Home;
