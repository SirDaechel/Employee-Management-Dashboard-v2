import moreoptionsIcon2 from "../assets/icons/moreoptionsIcon2";
import trashIcon from "../assets/icons/trashIcon";
import avatar1 from "../assets/images/avatar (1).webp";
import avatar2 from "../assets/images/avatar (2).webp";
import avatar3 from "../assets/images/avatar (3).webp";

const Project: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-64 h-fit bg-white rounded-lg p-0.7 relative cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="p-1.5 rounded-px10 font-poppins font-medium text-xs bg-primarycolour text-white">
          Artificial Intelligence
        </p>
        <div className="text-base cursor-pointer">{moreoptionsIcon2}</div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-base overflow-hidden">SaaS Project</p>
        <p className="text-customgrey text-xs h-9">
          This is to create a SaaS project
        </p>
      </div>

      <div className="flex flex-col items-start justify-center gap-2 pb-2.5 border-b-px1 border-b-solid border-b-grey12">
        <div className="w-full bg-grey7 py-0.7 px-0.6 text-grey10 rounded-px10 text-xs font-medium">
          Start: 20th November 2023
        </div>
        <div className="w-full bg-grey7 py-0.7 px-0.6 text-grey10 rounded-px10 text-xs font-medium">
          End: 3rd February 2023
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex pl-2 cursor-pointer w-fit">
          <img
            className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
            src={avatar1}
            alt=""
          />
          <img
            className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
            src={avatar2}
            alt=""
          />
          <img
            className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
            src={avatar3}
            alt=""
          />
          <p className="flex items-center justify-center w-px26 h-px26 bg-lightgrey text-white rounded-br50 text-xs font-normal ml-px3">
            +2
          </p>
        </div>

        <p className="text-sm py-0.3 px-0.4 rounded-lg bg-lightorange">
          Completed
        </p>
      </div>

      <div className=" gap-0.4 items-center justify-start absolute bg-white shadow-custom rounded-lg top-px15 right-m10 p-2 z-1 hidden">
        <span>{trashIcon}</span>
        <p className="py-0.4 px-0.3 text-xs cursor-pointer">Delete Project</p>
      </div>
    </div>
  );
};

export default Project;
