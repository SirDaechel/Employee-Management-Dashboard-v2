import arrowdownIcon from "../../assets/icons/arrowdownIcon";
import { useState } from "react";

type BtnDropdownType = {
  label: string;
  text: string;
  data: any[];
  setText: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const BtnDropdown: React.FC<BtnDropdownType> = ({
  label,
  text,
  data,
  setText,
  error,
  setError,
}) => {
  const [showRoles, setShowRoles] = useState<boolean>(false);

  // Create a Set to store unique roles
  const uniqueRoles = new Set();

  // Filter out duplicates and populate the Set
  const filteredStaffs = data.filter((d) => {
    if (!uniqueRoles.has(d.role)) {
      uniqueRoles.add(d.role);
      return true;
    }

    return false;
  });

  // open role dropdown
  const openRoleDropdown = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowRoles(!showRoles);
  };

  // select a role for staff
  const selectRole = (role: string) => {
    setError("");
    setText(role);
    setShowRoles(false);
  };

  return (
    <section className="relative w-full">
      <label className="font-poppins font-normal text-customgrey text-sm">
        {label}
      </label>

      <section className="flex items-center h-full justify-between bg-white4 border-px1 border-solid border-grey11 rounded w-full font-medium overflow-hidden">
        <input
          className="w-fit flex-grow font-openSans p-0.7 mt-0.3 text-xs text-darkgrey bg-transparent focus:outline-none"
          value={text}
          placeholder="Select role"
          readOnly
          disabled
        />
        <button
          className="w-12 h-12 text-white text-lg bg-primarycolour flex items-center justify-center cursor-pointer"
          onClick={(e) => openRoleDropdown(e)}
        >
          <span
            className={`transition ${showRoles && "rotate-180 transition"}`}
          >
            {arrowdownIcon}
          </span>
        </button>
      </section>
      <p className="text-red-500">{error}</p>
      {showRoles && (
        <div className="absolute bg-white py-0.6 pr-0 pl-0.7 mt-0.6 w-full shadow-custom rounded overflow-x-auto max-h-40 z-2">
          <ul>
            {filteredStaffs.map((staff: any) => (
              <li
                key={staff.id}
                className="flex flex-col items-start justify-center"
                onClick={() => selectRole(staff.role)}
              >
                <p className="cursor-pointer text-xs w-full py-2 pr-0 pl-3">
                  {staff.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default BtnDropdown;
