const PayrollList = () => {
  return (
    <tbody>
      <tr>
        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              David
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              12 hours per week
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              $1700
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              $1800
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              $100
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-darkergrey text-xs font-light font-poppins w-max">
              $1900
            </p>
          </div>
        </td>

        <td>
          <div
            className="w-fit rounded p-0.4"
            style={{
              backgroundColor: "#B4E197",
            }}
          >
            <p
              className="text-darkergrey text-xs font-light font-poppins w-max"
              style={{
                color: "#4E944F",
              }}
            >
              Paid
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default PayrollList;
