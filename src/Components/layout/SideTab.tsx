import { NavLink } from "react-router-dom";

type SideBarProps = {
  icon: JSX.Element;
  label: string;
  linkTo: any;
};

const SideTab: React.FC<SideBarProps> = ({ icon, label, linkTo }) => {
  return (
    <NavLink
      to={linkTo}
      className="flex items-center gap-0.62 text-customgrey p-0.62 rounded-lg cursor-pointer"
    >
      <span className="flex items-center justify-center text-1.2 m:text-2xl">
        {icon}
      </span>
      <p className="text-0.83 font-medium m:hidden">{label}</p>
    </NavLink>
  );
};

export default SideTab;
