import moreoptionsIcon from "../../../assets/icons/moreoptionsIcon";
import editIcon from "../../../assets/icons/editIcon";
import timeIcon from "../../../assets/icons/timeIcon";
import trashIcon from "../../../assets/icons/trashIcon";
import restoreIcon from "../../../assets/icons/restoreIcon";
import {
  toggleChecked,
  staffsState,
  addEditStaff,
} from "../data/staffsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  setStaffs,
  setArchivedStaffs,
  setDeletedStaffs,
} from "../data/staffsApiSlice";
import { changeSingleStaffsState } from "../../../utils/changeStaffsState";

type TableListType = {
  staff: any;
  currentStaffs: any[];
  index: number;
  activeTab: number;
  staffID: undefined;
  setStaffID: React.Dispatch<React.SetStateAction<undefined>>;
  removePage: any;
};

const StaffsTableList: React.FC<TableListType> = ({
  staff,
  currentStaffs,
  index,
  activeTab,
  staffID,
  setStaffID,
  removePage,
}) => {
  const { id, name, email, role, phone, wage, workinghours, age, checked } =
    staff;

  const theStaffState = useSelector(staffsState);
  const { staffs, archivedStaffs, deletedStaffs } = theStaffState;

  const [showStaffOptions, setShowStaffsOptions] = useState<boolean>(false);

  const dispatch = useDispatch();

  //toggle more staff options
  const toggleStaffOptions = (id: any) => {
    if (staffID === id) {
      // If the clicked staff is the same as the stored staffID, toggle the showOptions state
      setShowStaffsOptions((prev) => !prev);
    } else {
      // If a different staff is clicked, update the staffID and show options
      setStaffID(id);
      setShowStaffsOptions(true);
    }
  };

  const editStaff = (ID: number) => {
    const editThisStaff = staffs.filter((staff) => staff.id === ID);
    dispatch(addEditStaff(editThisStaff));
  };

  // archive a single staff
  const archiveSingleStaff = (id: number) => {
    if (activeTab === 0) {
      changeSingleStaffsState(
        id,
        dispatch,
        staffs,
        archivedStaffs,
        setArchivedStaffs,
        setStaffs,
        setShowStaffsOptions
      );
      removePage();
    } else if (activeTab === 2) {
      changeSingleStaffsState(
        id,
        dispatch,
        deletedStaffs,
        archivedStaffs,
        setArchivedStaffs,
        setDeletedStaffs,
        setShowStaffsOptions
      );
      removePage();
    }
  };

  // archive a single staff
  const deleteSingleStaff = (id: number) => {
    if (activeTab === 0) {
      changeSingleStaffsState(
        id,
        dispatch,
        staffs,
        deletedStaffs,
        setDeletedStaffs,
        setStaffs,
        setShowStaffsOptions
      );
      removePage();
    } else if (activeTab === 1) {
      changeSingleStaffsState(
        id,
        dispatch,
        archivedStaffs,
        deletedStaffs,
        setDeletedStaffs,
        setArchivedStaffs,
        setShowStaffsOptions
      );
      removePage();
    }
  };

  // restore a single staff
  const restoreSingleStaff = (id: number) => {
    if (activeTab === 1) {
      changeSingleStaffsState(
        id,
        dispatch,
        archivedStaffs,
        staffs,
        setStaffs,
        setArchivedStaffs,
        setShowStaffsOptions
      );
      removePage();
    } else if (activeTab === 2) {
      changeSingleStaffsState(
        id,
        dispatch,
        deletedStaffs,
        staffs,
        setStaffs,
        setDeletedStaffs,
        setShowStaffsOptions
      );
      removePage();
    }
  };

  return (
    <>
      <tr key={id}>
        <td>
          <input
            id={id}
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
            checked={checked}
            onChange={() =>
              dispatch(toggleChecked({ id: id, checked: !checked }))
            }
          />
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {name}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {email}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {role}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {phone}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            ${wage}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {workinghours} / week
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {age} y/o
          </p>
        </td>

        <td>
          <button
            className="cursor-pointer text-left"
            onClick={() => toggleStaffOptions(id)}
          >
            {moreoptionsIcon}
          </button>

          <span
            className="relative"
            style={{
              display: staffID === id && showStaffOptions ? "block" : "none",
            }}
          >
            <div
              className={`absolute right-0 bg-white shadow-custom rounded-lg p-2 ${
                index === currentStaffs.length - 1 ||
                index === currentStaffs.length - 2 ||
                index === currentStaffs.length - 3 ||
                index === currentStaffs.length - 4
                  ? "-bottom-1.5 right-7"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-0.2">
                {activeTab === 0 && (
                  <Link
                    to={"editstaff"}
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => editStaff(id)}
                  >
                    {editIcon}
                    <p className="text-xs">Edit</p>
                  </Link>
                )}

                {activeTab === 1 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => restoreSingleStaff(id)}
                  >
                    <div className="text-sm scale-125">{restoreIcon}</div>
                    <p className="text-xs">Restore</p>
                  </li>
                )}

                {activeTab === 2 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => restoreSingleStaff(id)}
                  >
                    <div className="text-sm scale-125">{restoreIcon}</div>
                    <p className="text-xs">Restore</p>
                  </li>
                )}
                {activeTab === 0 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => archiveSingleStaff(id)}
                  >
                    {timeIcon}
                    <p className="text-xs">Archive</p>
                  </li>
                )}

                {activeTab === 2 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => archiveSingleStaff(id)}
                  >
                    {timeIcon}
                    <p className="text-xs">Archive</p>
                  </li>
                )}
                {activeTab === 0 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => deleteSingleStaff(id)}
                  >
                    {trashIcon}
                    <p className="text-xs">Delete</p>
                  </li>
                )}
                {activeTab === 1 && (
                  <li
                    className="flex justify-start items-center gap-2 cursor-pointer p-0.3"
                    onClick={() => deleteSingleStaff(id)}
                  >
                    {trashIcon}
                    <p className="text-xs">Delete</p>
                  </li>
                )}
              </div>
            </div>
          </span>
        </td>
      </tr>
    </>
  );
};

export default StaffsTableList;
