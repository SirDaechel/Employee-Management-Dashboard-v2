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
      className="flex items-center gap-0.62 text-customgrey p-0.62 m:p-0 rounded-lg cursor-pointer"
    >
      <span className="flex items-center justify-center text-1.2 m:text-2xl ss:text-0.6 ultra:text-lg">
        {icon}
      </span>
      <p className="text-0.83 font-medium m:hidden ultra:text-lg">{label}</p>
    </NavLink>
  );
};

export default SideTab;
