import StaffsTableTitle from "./StaffsTableTitle";
import StaffsTableList from "./StaffsTableList";
import Pagination from "../../../components/ui/Pagination";
import { usePagination } from "../../../hooks/usePagination";
import { useSelector } from "react-redux";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";
import { staffsState } from "../data/staffsApiSlice";

const StaffsTable = () => {
  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const theStaffsData = useSelector(staffsState);
  const { staffs } = theStaffsData;

  const {
    currentData,
    pageNumbers,
    currentPage,
    paginate,
    paginateToFirst,
    paginateToLast,
  } = usePagination(staffs, staffsPerPage);

  const isSelectAllChecked = staffs.every((staff) => staff.checked);

  return (
    <>
      <section className="w-full overflow-x-auto relative">
        <table>
          <StaffsTableTitle isSelectAllChecked={isSelectAllChecked} />
          {currentData.map((staff: any) => (
            <StaffsTableList key={staff.id} staff={staff} />
          ))}
        </table>
        {staffs.length < 1 && (
          <p className="bg-white p-4 text-center">No data to display</p>
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
