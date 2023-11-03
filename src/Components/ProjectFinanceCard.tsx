import moneyIcon from "../../assets/Icons/moneyIcon";

type ProjectFinanceProps = {
  topText: string;
  spend: string;
  percentageText: string;
  arrow: JSX.Element;
  percent: string;
};

const ProjectFinanceCard = ({
  topText,
  spend,
  percentageText,
  arrow,
  percent,
}: ProjectFinanceProps) => {
  return (
    <section className="bg-white p-4 w-64 rounded">
      <div className="flex items-center justify-between mb-1.3">
        <p className="text-sm">{topText}</p>
        <span className="text-sm">{moneyIcon}</span>
      </div>

      <div>
        <p className="text-2xl font-normal mb-2.5">{spend}</p>
        <div className="flex items-center justify-start gap-1.5">
          <div className="flex rounded pt-1.5 pr-1.5 pb-1.5 pl-0">
            <span className="text-sm font-semibold" style={{ color: percent }}>
              {arrow}
            </span>
            <p className="text-0.83 font-semibold" style={{ color: percent }}>
              {percentageText}
            </p>
          </div>
          <p className="text-0.83 font-normal"> vs previous month</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectFinanceCard;
