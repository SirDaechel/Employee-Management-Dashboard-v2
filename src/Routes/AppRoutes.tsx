import { Routes, Route } from "react-router-dom";
import Layout from "../Views/Layout";
import Home from "../Views/Home";
import Staffs from "../Views/Staffs";
import Projects from "../Views/Projects";
import Payroll from "../Views/Payroll";
import HelpDesk from "../Views/HelpDesk";
import AddNewStaffs from "../Views/AddNewStaffs";
import AddProjects from "../Views/AddProjects";

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
