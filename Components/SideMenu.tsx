import SideTab from "./SideTab";
import dashboardicon from "../assets/Icons/dashboardicon.tsx";
import usersicon from "../assets/Icons/usersicon.tsx";
import cashIcon from "../assets/Icons/cashIcon.tsx";
import helpIcon from "../assets/Icons/helpIcon.tsx";
import projecticon from "../assets/Icons/projecticon.tsx";

const SideMenu = () => {
  return (
    <aside className="w-p13 h-screen bg-white overflow-hidden relative">
      <nav className="flex flex-col gap-4 bg-white pt-10.8 pr-6 pb-0 pl-6 h-screen fixed">
        <SideTab icon={dashboardicon} label={"Dashboard"} linkTo={"/"} />

        <SideTab icon={usersicon} label={"Staffs"} linkTo={"/staffs"} />

        <SideTab icon={projecticon} label={"Projects"} linkTo={"/projects"} />

        <SideTab icon={cashIcon} label={"Payroll"} linkTo={"/payroll"} />

        <SideTab icon={helpIcon} label={"Helpdesk"} linkTo={"/helpdesk"} />
      </nav>
    </aside>
  );
};

export default SideMenu;
