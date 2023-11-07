type MetricCardType = {
  topText: string;
  icon: JSX.Element;
  figure: number | string;
  percent: string;
  arrow: JSX.Element;
  percentage: string;
};

const PayrollMetricCard = ({
  topText,
  icon,
  figure,
  percent,
  arrow,
  percentage,
}: MetricCardType) => {
  return (
    <div className="bg-white p-4 w-64 rounded-px3 hover:scale-102 hover:transition">
      <div className="flex items-center justify-between mb-1.3">
        <p className="text-0.83">{topText}</p>
        <span className="text-0.83">{icon}</span>
      </div>

      <div>
        <p className="text-2xl font-normal mb-0.6">{figure}</p>
        <div className="flex items-center justify-start gap-0.3">
          <div className="flex rounded-px3 py-0.3 pr-0.3 pl-0">
            <span
              className="text-0.83 text-darkgrey font-medium"
              style={{ color: percent }}
            >
              {arrow}
            </span>
            <p
              className="text-0.83 text-darkgrey font-medium"
              style={{ color: percent }}
            >
              {percentage}
            </p>
          </div>
          <p className="text-0.83 font-normal"> vs previous month</p>
        </div>
      </div>
    </div>
  );
};

export default PayrollMetricCard;
