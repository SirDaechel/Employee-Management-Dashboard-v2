const PayrollTitle: React.FC = () => {
  return (
    <tr>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">Name</p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">Hours</p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">
            Gross Wage
          </p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">
            Statutory Wage
          </p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">
            Deductions
          </p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative xl:w-max">
          <p className="text-grey6 font-poppins text-0.83 font-light">
            Net Wage
          </p>
        </div>
      </th>
      <th>
        <div className="w-max text-left relative">
          <p className="text-grey6 font-poppins text-0.83 font-light">Status</p>
        </div>
      </th>
    </tr>
  );
};

export default PayrollTitle;
