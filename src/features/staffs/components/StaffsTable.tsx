import StaffsTableTitle from "./StaffsTableTitle";
import StaffsTableList from "./StaffsTableList";
import Pagination from "../../../components/ui/Pagination";
import { usePagination } from "../../../hooks/usePagination";
import { useSelector } from "react-redux";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";
import { staffsState } from "../data/staffsApiSlice";
import { useState } from "react";

type StaffsTableType = {
  staffs: any[];
  checkAll: any;
  activeTab: number;
};

const StaffsTable: React.FC<StaffsTableType> = ({
  staffs,
  checkAll,
  activeTab,
}) => {
  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const theStaffState = useSelector(staffsState);
  const { currentStaffs } = theStaffState;

  const [staffID, setStaffID] = useState();

  const {
    // currentData,
    pageNumbers,
    currentPage,
    paginate,
    paginateToFirst,
    paginateToLast,
    removePage,
  } = usePagination(staffs, currentStaffs, staffsPerPage);

  const isSelectAllChecked = staffs.every((staff) => staff.checked);

  return (
    <>
      <section className="m:w-full m:overflow-x-auto relative">
        <table>
          <StaffsTableTitle
            staffs={staffs}
            isSelectAllChecked={isSelectAllChecked}
            checkAll={checkAll}
            activeTab={activeTab}
          />
          <tbody>
            {currentStaffs.map((staff: any, index: number) => (
              <StaffsTableList
                key={staff.id}
                staff={staff}
                currentStaffs={currentStaffs}
                index={index}
                activeTab={activeTab}
                staffID={staffID}
                setStaffID={setStaffID}
                removePage={removePage}
              />
            ))}
          </tbody>
        </table>
        {staffs.length < 1 && (
          <p className="bg-white p-4 text-center">No data to display</p>
        )}
      </section>
      {staffs.length > 0 && (
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          paginate={paginate}
          paginateToFirst={paginateToFirst}
          paginateToLast={paginateToLast}
        />
      )}
    </>
  );
};

export default StaffsTable;
