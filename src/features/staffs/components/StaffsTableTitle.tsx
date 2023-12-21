import arrowdownIcon from "../../../assets/icons/arrowdownIcon";
import arrowupIcon from "../../../assets/icons/arrowupIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setArchivedStaffs,
  setDeletedStaffs,
  staffsState,
} from "../data/staffsApiSlice";
import { setStaffs } from "../data/staffsApiSlice";
import { sortArray } from "../../../utils/sortArray";
import { useState } from "react";

type StaffsTableTitleType = {
  staffs: any[];
  isSelectAllChecked: boolean;
  checkAll: any;
  activeTab: number;
};

const StaffsTableTitle: React.FC<StaffsTableTitleType> = ({
  staffs,
  isSelectAllChecked,
  checkAll,
  activeTab,
}) => {
  const dispatch = useDispatch();

  const theStaffState = useSelector(staffsState);
  const { archivedStaffs, deletedStaffs } = theStaffState;

  const [openNameSorting, setOpenNameSorting] = useState(false);
  const [openWageSorting, setOpenWageSorting] = useState(false);
  const [openHoursSorting, setOpenHoursSorting] = useState(false);
  const [openAgeSorting, setOpenAgeSorting] = useState(false);

  //----------------------- SORT THE STAFFS BY NAMES (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterNameByAscendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "firstname", "asc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "firstname", "asc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "firstname", "asc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenNameSorting(false);
  };

  const filterNameByDescendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "firstname", "desc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "firstname", "desc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "firstname", "desc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenNameSorting(false);
  };

  //----------------------- SORT THE STAFFS BY WAGE (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterWageByAscendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "wage", "asc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "wage", "asc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "wage", "asc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenWageSorting(false);
  };

  const filterWageByDescendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "wage", "desc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "wage", "desc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "wage", "desc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenWageSorting(false);
  };

  //----------------------- SORT THE STAFFS BY HOURS (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterHoursByAscendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "workinghours", "asc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "workinghours", "asc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "workinghours", "asc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenHoursSorting(false);
  };

  const filterHoursByDescendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "workinghours", "desc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "workinghours", "desc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "workinghours", "desc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenHoursSorting(false);
  };

  //----------------------- SORT THE STAFFS BY AGE (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterAgeByAscendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "age", "asc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "age", "asc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "age", "asc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenAgeSorting(false);
  };

  const filterAgeByDescendingOrder = () => {
    if (activeTab === 0) {
      const sortedStaffs = sortArray(staffs, "age", "desc");
      dispatch(setStaffs(sortedStaffs));
    } else if (activeTab === 1) {
      const sortedStaffs = sortArray(archivedStaffs, "age", "desc");
      dispatch(setArchivedStaffs(sortedStaffs));
    } else if (activeTab === 2) {
      const sortedStaffs = sortArray(deletedStaffs, "age", "desc");
      dispatch(setDeletedStaffs(sortedStaffs));
    }
    setOpenAgeSorting(false);
  };
  return (
    <thead className="border-b-px2 border-b-solid border-b-bodycolour">
      <tr>
        <th>
          <input
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
            checked={!staffs.length ? false : isSelectAllChecked}
            onChange={(e) => dispatch(checkAll(e.target.checked))}
          />
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div
              className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition"
              onClick={() => setOpenNameSorting(!openNameSorting)}
            >
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Name
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            {openNameSorting && (
              <div className="flex flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit">
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterNameByAscendingOrder}
                >
                  acending
                </p>
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterNameByDescendingOrder}
                >
                  descending
                </p>
              </div>
            )}
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Email
            </p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">Role</p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Phone
            </p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div
              className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition"
              onClick={() => setOpenWageSorting(!openWageSorting)}
            >
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Wage
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>
            {openWageSorting && (
              <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit">
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterWageByAscendingOrder}
                >
                  acending
                </p>
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterWageByDescendingOrder}
                >
                  descending
                </p>
              </div>
            )}
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div
              className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition"
              onClick={() => setOpenHoursSorting(!openHoursSorting)}
            >
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Hours
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            {openHoursSorting && (
              <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit">
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterHoursByAscendingOrder}
                >
                  acending
                </p>
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterHoursByDescendingOrder}
                >
                  descending
                </p>
              </div>
            )}
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div
              className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition"
              onClick={() => setOpenAgeSorting(!openAgeSorting)}
            >
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Age
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            {openAgeSorting && (
              <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit">
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterAgeByAscendingOrder}
                >
                  acending
                </p>
                <p
                  className="text-sm font-light py-0.3 px-0.4 cursor-pointer"
                  onClick={filterAgeByDescendingOrder}
                >
                  descending
                </p>
              </div>
            )}
          </div>
        </th>

        <th></th>
      </tr>
    </thead>
  );
};

export default StaffsTableTitle;
