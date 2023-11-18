import walletIcon from "../../assets/icons/walletIcon";

const PayrollDate = () => {
  return (
    <div className="bg-white h-18.9788 p-8 rounded flex items-center justify-center w-p29 m:w-full">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center w-4 h-4 text-5xl border-px1 border-solid border-primarycolour bg-colour1 rounded-br50 p-9 text-primarycolour">
          {walletIcon}
        </div>

        <p className="font-medium text-customgrey">Next Payroll</p>

        <p className="text-xl font-medium">30/10/2023</p>

        <p className="text-0.9 text-customgrey font-medium text-center">
          <b>Payroll Run:</b> <br></br>30-10-2023 to 10-11-2023
        </p>
      </div>
    </div>
  );
};

export default PayrollDate;
