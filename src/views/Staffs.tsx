import StaffsPageUtilities from "../features/staffs/components/StaffsPageUtilities";
import Tabs from "../components/ui/Tabs";
import StaffsTableTools from "../features/staffs/components/StaffsTableTools";
import StaffsTable from "../features/staffs/components/StaffsTable";
import { staffsState } from "../features/staffs/data/staffsApiSlice";
import { useSelector } from "react-redux";

const Staffs: React.FC = () => {
  const staffsData = useSelector(staffsState);
  const { staffs } = staffsData;

  const staffsTabs = [
    { id: "1", title: "All Staffs", length: staffs.length },
    { id: "2", title: "Archived", length: staffs.length },
    { id: "3", title: "Recycle Bin", length: staffs.length },
  ];
  return (
    <>
      <StaffsPageUtilities />
      <Tabs tabsData={staffsTabs} />
      <StaffsTableTools />
      <StaffsTable />
    </>
  );
};

export default Staffs;
