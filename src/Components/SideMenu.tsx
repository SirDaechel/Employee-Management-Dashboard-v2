import SideTab from "./SideTab.tsx";
import dashboardicon from "../assets/icons/dashboardIcon.tsx";
import usersicon from "../assets/icons/userBadgeIcon.tsx";
import cashIcon from "../assets/icons/cashIcon.tsx";
import helpIcon from "../assets/icons/helpIcon.tsx";
import projecticon from "../assets/icons/briefcaseIcon.tsx";

const SideMenu = () => {
  return (
    <aside className="w-p13 min-h-screen bg-white overflow-hidden relative">
      <nav className="w-p13 flex flex-col gap-4  pt-10.8 pr-6 pb-0 pl-6 h-screen fixed">
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
