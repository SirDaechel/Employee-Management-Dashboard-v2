import StaffsTableTitle from "./StaffsTableTitle";
import StaffsTableList from "./StaffsTableList";

const StaffsTable = () => {
  return (
    <section className="w-full overflow-x-auto">
      <table>
        <StaffsTableTitle />
        <StaffsTableList />
      </table>
    </section>
  );
};

export default StaffsTable;
