import TableTitle from "./TableTitle";
import TableList from "./TableList";
import { useGetStaffsQuery } from "../data/staffsApiSlice";

const StaffsTable = () => {
  const { data: staffs, isSuccess, isLoading, isError } = useGetStaffsQuery({});

  return (
    <section className="w-full overflow-x-auto relative">
      <table>
        <TableTitle />
        {isSuccess &&
          staffs.map((staff: any) => <TableList key={staff.id} {...staff} />)}
      </table>
      {isSuccess && staffs.length < 1 && (
        <p className="bg-white p-4 text-center">No data to display</p>
      )}
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
