import calendarIcon from "../../assets/icons/calendarIcon";

type DateInputType = {
  label: string;
  projectDate: string;
  openCalendar: () => void;
  error: string;
  placeholder: string;
};

const DateInput: React.FC<DateInputType> = ({
  label,
  projectDate,
  openCalendar,
  error,
  placeholder,
}) => {
  return (
    <div className="w-full relative">
      <div className="font-poppins font-medium text-grey13 text-sm">
        {label}
      </div>
      <div
        className="font-openSans p-0.7 mt-0.3 border-px1 border-solid border-grey7 rounded w-full font-medium text-xs bg-white4 cursor-pointer flex items-center justify-between"
        onClick={() => openCalendar()}
      >
        <input
          className="text-grey13 text-sm font-normal focus:outline-none bg-transparent cursor-pointer"
          value={projectDate}
          readOnly
          placeholder={placeholder}
        />
        {/* <p className="text-grey13 font-normal">{projectDate}</p> */}
        <div className="text-grey13 text-base">{calendarIcon}</div>
      </div>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default DateInput;
