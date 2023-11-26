import StaffsPageUtilities from "../features/staffs/components/StaffsPageUtilities";
import Tabs from "../components/ui/Tabs";
import StaffsTableTools from "../features/staffs/components/StaffsTableTools";
import StaffsTable from "../features/staffs/components/StaffsTable";
import { useGetStaffsQuery } from "../features/staffs/data/staffsApiSlice";

const Staffs: React.FC = () => {
  const { data: staffs, isSuccess } = useGetStaffsQuery({});
  const staffsTabs = [
    { id: "1", title: "All Staffs", length: isSuccess && staffs.length },
    { id: "2", title: "Archived", length: isSuccess && staffs.length },
    { id: "3", title: "Recycle Bin", length: isSuccess && staffs.length },
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
