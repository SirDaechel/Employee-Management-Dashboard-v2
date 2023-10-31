import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Staffs from "../views/Staffs";
import Projects from "../views/Projects";
import Payroll from "../views/Payroll";
import HelpDesk from "../views/HelpDesk";

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
