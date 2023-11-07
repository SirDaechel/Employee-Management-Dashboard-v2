import StaffsPageUtilities from "../Components/StaffsPageUtilities";
import Tabs from "../Components/Tabs";
import TableTools from "../Components/TableTools";
import Table from "../Components/Table";

const Staffs = () => {
  const staffsTabs = ["All Staffs", "Archived", "Recycle Bin"];
  return (
    <>
      <StaffsPageUtilities />
      <Tabs tabsText={staffsTabs} />
      <TableTools />
      <Table />
    </>
  );
};

export default Staffs;
