import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type SideBarProps = {
  icon: ReactElement;
  label: String;
  linkTo: any;
};

const SideTab = ({ icon, label, linkTo }: SideBarProps) => {
  return (
    <NavLink to={linkTo}>
      <div className="flex items-center gap-0.62 text-customgrey p-0.62 rounded-lg cursor-pointer">
        <span>{icon}</span>
        <p className="text-0.83 font-medium">{label}</p>
      </div>
    </NavLink>
  );
};

export default SideTab;
