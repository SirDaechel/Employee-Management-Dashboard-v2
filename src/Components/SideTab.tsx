import { NavLink } from "react-router-dom";

type SideBarProps = {
  icon: JSX.Element;
  label: string;
  linkTo: any;
};

const SideTab = ({ icon, label, linkTo }: SideBarProps) => {
  return (
    <NavLink
      to={linkTo}
      className="flex items-center gap-0.62 text-customgrey p-0.62 rounded-lg cursor-pointer m:block"
    >
      <span className="flex items-center justify-center text-1.2 m:hidden">
        {icon}
      </span>
      <p className="text-0.83 font-medium">{label}</p>
    </NavLink>
  );
};

export default SideTab;
