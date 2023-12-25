import arrowdownIcon from "../../assets/icons/arrowdownIcon";
import { useState } from "react";

type BtnDropdownType = {
  label: string;
  text: string;
  data: any[];
  setText: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  property?: string;
};

const BtnDropdown: React.FC<BtnDropdownType> = ({
  label,
  text,
  data,
  setText,
  error,
  setError,
  placeholder,
  property,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // Create a Set to store unique roles
  const uniqueData = new Set();

  // Filter out duplicates and populate the Set
  const filteredData = data.filter((d) => {
    if (property) {
      if (!uniqueData.has(d[property])) {
        uniqueData.add(d[property]);
        return true;
      }

      return false;
    }
  });

  // open role dropdown
  const openDropdown = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  // select a role for staff
  const selectItem = (role: string) => {
    setError("");
    setText(role);
    setShowDropdown(false);
  };

  return (
    <section className="relative w-full">
      <label className="font-poppins font-medium text-grey13 text-sm">
        {label}
      </label>

      <section className="flex items-center h-full justify-between bg-white4 border-px1 border-solid border-grey11 rounded w-full font-medium overflow-hidden">
        <input
          className="w-fit flex-grow font-normal font-openSans p-0.7 text-sm text-grey13 bg-transparent focus:outline-none"
          value={text}
          placeholder={placeholder}
          readOnly
          disabled
        />
        <button
          className="w-12 h-12 text-white text-lg bg-primarycolour flex items-center justify-center cursor-pointer"
          onClick={(e) => openDropdown(e)}
        >
          <span
            className={`transition ${showDropdown && "rotate-180 transition"}`}
          >
            {arrowdownIcon}
          </span>
        </button>
      </section>
      <p className="text-red-500">{error}</p>
      {showDropdown && (
        <div className="absolute bg-white py-0.6 px-0.7 mt-0.6 w-full shadow-custom rounded overflow-x-auto max-h-40 z-2">
          <ul>
            {filteredData.map((data: any) => (
              <li
                key={data.id}
                className="flex flex-col items-start justify-center"
                onClick={() => selectItem(property && data[property])}
              >
                <p className="cursor-pointer text-sm w-full py-2 pr-0 pl-3 hover:bg-grey12 hover:transition">
                  {property && data[property]}
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
