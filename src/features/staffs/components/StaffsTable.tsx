import StaffsTableTitle from "./StaffsTableTitle";
import StaffsTableList from "./StaffsTableList";
import Pagination from "../../../components/ui/Pagination";
import { useGetStaffsQuery } from "../data/staffsApiSlice";
import { usePagination } from "../../../hooks/usePagination";
import { useSelector } from "react-redux";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";

const StaffsTable = () => {
  const { data: staffs, isSuccess, isLoading, isError } = useGetStaffsQuery({});

  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const {
    currentData,
    pageNumbers,
    currentPage,
    paginate,
    paginateToFirst,
    paginateToLast,
  } = usePagination(staffs, staffsPerPage);

  return (
    <>
      <section className="w-full overflow-x-auto relative">
        <table>
          <StaffsTableTitle />
          {currentData.map((staff: any) => (
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
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        paginate={paginate}
        paginateToFirst={paginateToFirst}
        paginateToLast={paginateToLast}
      />
    </>
  );
};

export default StaffsTable;
