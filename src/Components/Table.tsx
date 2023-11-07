import TableTitle from "./TableTitle";
import TableList from "./TableList";

const StaffsTable = () => {
  return (
    <section className="w-full overflow-x-auto">
      <table>
        <TableTitle />
        <TableList />
      </table>
    </section>
  );
};

export default StaffsTable;
