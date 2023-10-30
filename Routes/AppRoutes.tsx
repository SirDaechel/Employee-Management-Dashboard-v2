import { Routes, Route } from "react-router-dom";
import Layout from "../Views/Layout";
import Home from "../Views/Home";
import Staffs from "../Views/Staffs";
import Projects from "../Views/Projects";
import Payroll from "../Views/Payroll";
import HelpDesk from "../Views/HelpDesk";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="helpdesk" element={<HelpDesk />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
