import PayrollTitle from "./PayrollTitle";
import PayrollList from "./PayrollList";

const PayrollTable = () => {
  return (
    <section className="w-full overflow-x-auto">
      <table>
        <PayrollTitle />
        <PayrollList />
      </table>
    </section>
  );
};

export default PayrollTable;
