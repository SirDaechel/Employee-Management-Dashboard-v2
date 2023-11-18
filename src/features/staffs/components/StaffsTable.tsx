import StaffsTableTitle from "./StaffsTableTitle";
import StaffsTableList from "./StaffsTableList";
import { useGetStaffsQuery } from "../data/staffsApiSlice";

const StaffsTable = () => {
  const { data: staffs, isSuccess, isLoading, isError } = useGetStaffsQuery({});

  return (
    <section className="w-full overflow-x-auto relative">
      <table>
        <StaffsTableTitle />
        {isSuccess &&
          staffs.map((staff: any) => (
            <StaffsTableList key={staff.id} {...staff} />
          ))}
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
