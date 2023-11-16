import TableTitle from "./TableTitle";
import TableList from "./TableList";
import { useGetStaffsQuery } from "../api/staffsApiSlice";

const StaffsTable = () => {
  const { data: staffs, isSuccess, isLoading, isError } = useGetStaffsQuery({});
  return (
    <section className="w-full overflow-x-auto relative">
      <table>
        <TableTitle />
        <TableList data={staffs} isSuccess={isSuccess} />
      </table>
      {isLoading && <p className="bg-white p-4 text-center">Loading...</p>}
      {isError && (
        <p className="bg-white p-4 text-red-500 text-center">
          Error while fetching data. Make sure you have internet connection!
        </p>
      )}
    </section>
  );
};

export default StaffsTable;
