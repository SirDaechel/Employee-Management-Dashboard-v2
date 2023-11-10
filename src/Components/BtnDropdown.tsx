import arrowdownIcon from "../assets/icons/arrowdownIcon";

type BtnDropdownType = {
  label: string;
  text: string;
};

const BtnDropdown: React.FC<BtnDropdownType> = ({ label, text }) => {
  return (
    <section className="relative w-full">
      <div className="font-poppins font-normal text-customgrey text-sm">
        {label}
      </div>

      <div className="font-openSans p-0.7 mt-0.3 border-px1 border-solid border-grey7 rounded w-full font-medium text-xs bg-white4 cursor-pointer flex items-center justify-between">
        <p className="text-grey13">{text}</p>
        <div className="text-grey13 text-sm">{arrowdownIcon}</div>
      </div>

      <div className="absolute bg-white py-0.6 pr-0 pl-0.7 mt-0.6 w-full shadow-custom rounded overflow-hidden max-h-40 z-2 hidden">
        <div className="flex flex-col items-start justify-center">
          <p className="cursor-pointer text-xs w-full py-2 pr-0 pl-3">High</p>
          <p className="cursor-pointer text-xs w-full py-2 pr-0 pl-3">Medium</p>
        </div>
      </div>
    </section>
  );
};

export default BtnDropdown;
