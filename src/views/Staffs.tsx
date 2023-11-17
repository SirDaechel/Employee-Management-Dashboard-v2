import StaffsPageUtilities from "../components/StaffsPageUtilities";
import Tabs from "../components/Tabs";
import TableTools from "../components/TableTools";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { useGetStaffsQuery } from "../data/staffsApiSlice";

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
      <TableTools />
      <Table />
      <Pagination />
    </>
  );
};

export default Staffs;
