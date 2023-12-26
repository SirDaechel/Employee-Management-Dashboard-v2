import flagIcon from "../../../assets/icons/flagIcon";
import restoreIcon from "../../../assets/icons/restoreIcon";
import timeIcon from "../../../assets/icons/timeIcon";
import trashIcon from "../../../assets/icons/trashIcon";
import arrowdownIcon from "../../../assets/icons/arrowdownIcon";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifyPageSize } from "../../../store/StaffsPerPageSlice";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";
import { staffsState } from "../data/staffsApiSlice";
import {
  setArchivedStaffs,
  setStaffs,
  setDeletedStaffs,
} from "../data/staffsApiSlice";
import { changeStaffsState } from "../../../utils/changeStaffsState";

type StaffsTableTools = {
  theStaffs: any[];
  activeTab: number;
};

const TableTools: React.FC<StaffsTableTools> = ({ theStaffs, activeTab }) => {
  const theStaffState = useSelector(staffsState);
  const { staffs, archivedStaffs, deletedStaffs, currentStaffs } =
    theStaffState;

  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showActionsError, setShowActionsError] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // save the current staffsPerPage value
  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const [pageSizeNumber, setPageSizeNumber] = useState<number>(10);

  // handle page size change
  const handleChangePageSize = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (e.currentTarget.textContent) {
      setPageSizeNumber(Number(e.currentTarget.textContent));
    }
  };

  // update the staffsPerPage global state when the pageSizeNumber state changes
  useEffect(() => {
    dispatch(modifyPageSize(pageSizeNumber));
  }, [pageSizeNumber]);

  // check if the length of the staffs that are checked is more than one, open actions, if it isn't, display a message
  const takeAction = () => {
    const checkedStaffs = theStaffs.filter((staff) => staff.checked);
    if (checkedStaffs.length > 1) {
      setShowActionsError(false);
      setShowActions(!showActions);
    } else {
      setShowActionsError(true);
    }
  };

  // set the take action error message to false after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowActionsError(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  // archived selected staffs
  const archiveStaffs = () => {
    if (activeTab === 0) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        archivedStaffs,
        staffs,
        setArchivedStaffs,
        setStaffs,
        setShowActions
      );
    } else if (activeTab === 2) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        archivedStaffs,
        deletedStaffs,
        setArchivedStaffs,
        setDeletedStaffs,
        setShowActions
      );
    }
  };

  // delete selected staffs
  const deleteStaffs = () => {
    if (activeTab === 0) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        deletedStaffs,
        staffs,
        setDeletedStaffs,
        setStaffs,
        setShowActions
      );
    } else if (activeTab === 1) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        deletedStaffs,
        archivedStaffs,
        setDeletedStaffs,
        setArchivedStaffs,
        setShowActions
      );
    }
  };

  // restore selected staffs
  const restoreStaffs = () => {
    if (activeTab === 1) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        staffs,
        archivedStaffs,
        setStaffs,
        setArchivedStaffs,
        setShowActions
      );
    } else if (activeTab === 2) {
      changeStaffsState(
        dispatch,
        currentStaffs,
        staffs,
        deletedStaffs,
        setStaffs,
        setDeletedStaffs,
        setShowActions
      );
    }
  };

  return (
    <div className="flex items-center justify-between w-full mb-0.62">
      <p className="text-grey6 font-openSans text-0.83 font-extralight m:hidden">
        {`Showing ${
          theStaffs.length >= 10
            ? staffsPerPage
            : theStaffs.length < 10
            ? theStaffs.length
            : 0
        }-${theStaffs.length} result`}
      </p>

      <div className="flex items-center justify-center gap-8 m:justify-between m:w-full">
        <div className="relative flex items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <p
                className="absolute top-m140 left-m20 text-0.7 bg-grey7 p-0.2 rounded-lg text-center w-p140 transition m:left-0"
                style={{ display: showActionsError ? "block" : "none" }}
              >
                Please check more than one staff
              </p>

              <button
                className="flex items-center justify-center gap-2 bg-white2 border-px1 border-solid border-grey8 rounded-lg py-2 px-2.5 text-0.83 text-grey8"
                onClick={takeAction}
              >
                {flagIcon}
                <p>Take actions</p>
              </button>
            </div>

            <div
              className="absolute top-0 right-p120 bg-white py-0.7 px-0.6 rounded-lg shadow-custom z-10 min-w-p120 overflow-hidden transition m:left-p110"
              style={{ display: showActions ? "block" : "none" }}
            >
              <ul className="flex flex-col gap-1 text-0.83 overflow-hidden">
                <li
                  className="py-1.5 px-0.3 flex items-center justify-start gap-2.5 cursor-pointer hover:bg-lightgrey2 hover:transition"
                  style={{ display: activeTab === 0 ? "none" : "flex" }}
                  onClick={restoreStaffs}
                >
                  <span className="text-sm scale-125">{restoreIcon}</span>
                  <p>Restore all</p>
                </li>

                <li
                  className="py-1.5 px-0.3 flex items-center justify-start gap-2.5 cursor-pointer hover:bg-lightgrey2 hover:transition"
                  style={{ display: activeTab === 1 ? "none" : "flex" }}
                  onClick={archiveStaffs}
                >
                  <span className="text-sm">{timeIcon}</span>
                  <p>Archive all</p>
                </li>

                <li
                  className="py-1.5 px-0.3 flex items-center justify-start gap-2.5 cursor-pointer hover:bg-lightgrey2 hover:transition"
                  style={{ display: activeTab === 2 ? "none" : "flex" }}
                  onClick={deleteStaffs}
                >
                  <span className="text-sm">{trashIcon}</span>
                  <p>Delete all</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5">
          <p className="text-grey6 font-openSans text-0.83 font-extralight ss:hidden xl:hidden">
            Staffs Per Page
          </p>

          <div className="relative">
            <div
              className="flex py-1.5 px-4 justify-center items-center gap-2.5 rounded-lg border-px1 border-solid border-grey8 cursor-pointer"
              onClick={toggleMenu}
            >
              <p className="text-darkergrey font-roboto font-light">
                {pageSizeNumber}
              </p>
              <button
                className={`flex text-base transition ${
                  showMenu && "rotate-180 transition"
                }`}
              >
                {arrowdownIcon}
              </button>
            </div>
            {showMenu && (
              <ul className="absolute z-10 w-full flex flex-col gap-0.3 text-center mt-0.3 p-0.3 rounded-px5 bg-white shadow-custom2 border-px1 border-solid border-searchbarborder">
                <li className="cursor-pointer">
                  <p
                    className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                    onClick={handleChangePageSize}
                  >
                    10
                  </p>
                </li>

                <li className="cursor-pointer">
                  <p
                    className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                    onClick={handleChangePageSize}
                  >
                    15
                  </p>
                </li>

                <li className="cursor-pointer">
                  <p
                    className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                    onClick={handleChangePageSize}
                  >
                    20
                  </p>
                </li>

                <li className="cursor-pointer">
                  <p
                    className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                    onClick={handleChangePageSize}
                  >
                    25
                  </p>
                </li>

                <li className="cursor-pointer">
                  <p
                    className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                    onClick={handleChangePageSize}
                  >
                    30
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTools;
