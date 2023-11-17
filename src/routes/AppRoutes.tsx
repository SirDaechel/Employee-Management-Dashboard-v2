import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Staffs from "../views/Staffs";
import Projects from "../views/Projects";
import Payroll from "../views/Payroll";
import HelpDesk from "../views/HelpDesk";
import AddNewStaffs from "../views/AddNewStaffs";
import AddProjects from "../views/AddProjects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="staffs">
          <Route index element={<Staffs />} />
          <Route path="addstaff" element={<AddNewStaffs />} />
        </Route>
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path="addproject" element={<AddProjects />} />
        </Route>
        <Route path="payroll" element={<Payroll />} />
        <Route path="helpdesk" element={<HelpDesk />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
