type PayrollListType = {
  staff: any;
};

const PayrollList: React.FC<PayrollListType> = ({ staff }) => {
  const { id, name, wage, workinghours, statutorywage, paystatus } = staff;
  const deduction = 750;
  return (
    <tr key={id}>
      <td>
        <div>
          <p className="text-darkergrey text-xs font-light font-poppins w-max">
            {name}
          </p>
        </div>
      </td>

      <td>
        <div>
          <p className="text-darkergrey text-xs font-light font-poppins w-max">
            {workinghours} hours per week
          </p>
        </div>
      </td>

      <td>
        <div>
          <p className="text-darkergrey text-xs font-light font-poppins w-max">
            ${wage}
          </p>
        </div>
      </td>

      <td>
        <div>
          <p className="text-darkergrey text-xs font-light font-poppins w-max">
            ${statutorywage}
          </p>
        </div>
      </td>

      <td>
        <div>
          <p className="text-red-500 text-xs font-light font-poppins w-max">
            {`-${deduction}`}
          </p>
        </div>
      </td>

      <td>
        <div>
          <p className="text-darkergrey text-xs font-light font-poppins w-max">
            ${Number(wage) - deduction}
          </p>
        </div>
      </td>

      <td>
        <div
          className="w-fit rounded p-0.4"
          style={{
            backgroundColor:
              paystatus === "Paid"
                ? "#B4E197"
                : paystatus === "Unpaid"
                ? "#FA9884"
                : paystatus === "Pending"
                ? "#EEEEEE"
                : paystatus,
          }}
        >
          <p
            className="text-darkergrey text-xs font-light font-poppins w-max"
            style={{
              color:
                paystatus === "Paid"
                  ? "#4E944F"
                  : paystatus === "Unpaid"
                  ? "#D21312"
                  : paystatus === "Pending"
                  ? "#73777B"
                  : paystatus,
            }}
          >
            {paystatus}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default PayrollList;
