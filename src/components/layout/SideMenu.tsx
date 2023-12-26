import SideTab from "./SideTab.tsx";
import dashboardicon from "../../assets/icons/dashboardIcon.tsx";
import usersicon from "../../assets/icons/userBadgeIcon.tsx";
import cashIcon from "../../assets/icons/cashIcon.tsx";
import helpIcon from "../../assets/icons/helpIcon.tsx";
import projecticon from "../../assets/icons/briefcaseIcon.tsx";

const SideMenu: React.FC = () => {
  return (
    <aside className="w-p13 h-screen overflow-hidden relative m:w-full m:h-p7 m:fixed m:bottom-0 m:z-7 m:bg-white m:shadow-custom3 xl:w-p23 xxl:w-p23 ultra:w-p13">
      <ul className="fixed bg-white pt-10.8 pr-6 pb-0 pl-6 h-screen overflow-hidden m:w-screen m:h-p7 m:py-0.7 m:px-0.6 xl:w-p23 xxl:w-p23 ultra:w-p13">
        <nav className="flex flex-col gap-4 m:h-full m:flex-row m:items-center m:justify-around">
          <SideTab icon={dashboardicon} label={"Dashboard"} linkTo={"/"} />

          <SideTab icon={usersicon} label={"Staffs"} linkTo={"/staffs"} />

          <SideTab icon={projecticon} label={"Projects"} linkTo={"/projects"} />

          <SideTab icon={cashIcon} label={"Payroll"} linkTo={"/payroll"} />

          <SideTab icon={helpIcon} label={"Helpdesk"} linkTo={"/helpdesk"} />
        </nav>
      </ul>
    </aside>
  );
};

export default SideMenu;
