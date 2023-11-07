const PayrollTitle = () => {
  return (
    <thead className="border-b-px2 border-b-solid border-b-bodycolour">
      <tr>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">Name</p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Hours
            </p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Gross Wage
            </p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Statutory Wage
            </p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Deductions
            </p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Net Wage
            </p>
          </div>
        </th>
        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Status
            </p>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default PayrollTitle;
