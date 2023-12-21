import StaffsPageUtilities from "../features/staffs/components/StaffsPageUtilities";
import Tabs from "../components/ui/Tabs";
import StaffsTableTools from "../features/staffs/components/StaffsTableTools";
import StaffsTable from "../features/staffs/components/StaffsTable";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  staffsState,
  checkAllStaffs,
  checkAllArchivedStaffs,
  checkAllDeletedStaffs,
} from "../features/staffs/data/staffsApiSlice";

const Staffs: React.FC = () => {
  const staffsData = useSelector(staffsState);
  const { staffs } = staffsData;
  const { archivedStaffs } = staffsData;
  const { deletedStaffs } = staffsData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const staffsTabs = [
    { id: "1", title: "All Staffs", length: staffs.length },
    { id: "2", title: "Archived", length: archivedStaffs.length },
    { id: "3", title: "Recycle Bin", length: deletedStaffs.length },
  ];
  return (
    <>
      <StaffsPageUtilities />
      <Tabs
        tabsData={staffsTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 0 && (
        <StaffsTableTools theStaffs={staffs} activeTab={activeTab} />
      )}
      {activeTab === 1 && (
        <StaffsTableTools theStaffs={archivedStaffs} activeTab={activeTab} />
      )}
      {activeTab === 2 && (
        <StaffsTableTools theStaffs={deletedStaffs} activeTab={activeTab} />
      )}

      {activeTab === 0 && (
        <StaffsTable
          activeTab={activeTab}
          staffs={staffs}
          checkAll={checkAllStaffs}
        />
      )}
      {activeTab === 1 && (
        <StaffsTable
          activeTab={activeTab}
          staffs={archivedStaffs}
          checkAll={checkAllArchivedStaffs}
        />
      )}
      {activeTab === 2 && (
        <StaffsTable
          activeTab={activeTab}
          staffs={deletedStaffs}
          checkAll={checkAllDeletedStaffs}
        />
      )}
    </>
  );
};

export default Staffs;
