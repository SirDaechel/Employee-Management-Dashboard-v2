import SideTab from "./SideTab.tsx";
import dashboardicon from "../assets/icons/dashboardIcon.tsx";
import usersicon from "../assets/icons/userBadgeIcon.tsx";
import cashIcon from "../assets/icons/cashIcon.tsx";
import helpIcon from "../assets/icons/helpIcon.tsx";
import projecticon from "../assets/icons/briefcaseIcon.tsx";

const SideMenu = () => {
  return (
    <aside className="w-p13 h-screen bg-white overflow-hidden relative m:w-full m:h-p7 m:fixed m:bottom-0 m:z-7 m:bg-white m:shadow-custom3">
      <nav className="w-p13 h-screen flex gap-4 pt-10.8 pr-6 pb-0 pl-6 flex-col bg-white fixed m:flex-row m:items-center m:justify-around m:bg-transparent m:py-0.7 m:px-0.4">
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
