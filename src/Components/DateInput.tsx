import calendarIcon from "../assets/icons/calendarIcon";

type DateInputType = {
  label: string;
  projectDate: string;
};

const DateInput: React.FC<DateInputType> = ({ label, projectDate }) => {
  return (
    <div className="w-full relative">
      <div className="font-poppins font-normal text-customgrey text-sm">
        {label}
      </div>

      <div className="font-openSans p-0.7 mt-0.3 border-px1 border-solid border-grey7 rounded w-full font-medium text-xs bg-white4 cursor-pointer flex items-center justify-between">
        <p className="text-grey13">{projectDate}</p>
        <div className="text-grey13 text-base">{calendarIcon}</div>
      </div>
    </div>
  );
};

export default DateInput;
