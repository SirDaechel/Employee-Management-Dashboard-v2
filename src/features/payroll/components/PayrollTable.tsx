import PayrollTitle from "./PayrollTitle";
import PayrollList from "./PayrollList";
import { staffsState } from "../../staffs/data/staffsApiSlice";
import { useSelector } from "react-redux";
import { usePagination } from "../../../hooks/usePagination";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";
import Pagination from "../../../components/ui/Pagination";

type PayrollTableType = {
  query: string;
};

const PayrollTable: React.FC<PayrollTableType> = ({ query }) => {
  const theStaffs = useSelector(staffsState);
  const { staffs, currentStaffs } = theStaffs;

  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const filteredSearch = staffs.filter((staff) =>
    staff.name.toLowerCase().includes(query.toLowerCase())
  );

  const {
    pageNumbers,
    currentPage,
    paginate,
    paginateToFirst,
    paginateToLast,
  } = usePagination(staffs, currentStaffs, staffsPerPage);

  return (
    <>
      <section className="w-full overflow-x-auto">
        <table>
          <thead className="border-b-px2 border-b-solid border-b-bodycolour">
            <PayrollTitle />
          </thead>
          <tbody>
            {query &&
              filteredSearch.map((staff) => <PayrollList staff={staff} />)}

            {!query &&
              currentStaffs.map((staff) => <PayrollList staff={staff} />)}
          </tbody>
        </table>
      </section>
      {!query && staffs.length > 0 && (
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

export default PayrollTable;
