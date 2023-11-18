import moreoptionsIcon2 from "../../../assets/icons/moreoptionsIcon2";
import trashIcon from "../../../assets/icons/trashIcon";

const Ticket: React.FC = () => {
  return (
    <div className="relative bg-white rounded-lg cursor-pointer transition">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-0.7 border-b-px2 border-b-solid border-b-barchartbg pb-4">
          <div className="flex items-center justify-between">
            <p className="py-0.3 px-0.7 bg-lightgrey3 text-primarycolour w-fit rounded font-medium text-0.9">
              1SGJSJH67
            </p>
            <p className="cursor-pointer text-base">{moreoptionsIcon2}</p>
          </div>
          <p className="font-semibold text-0.9 text-darkgrey">Faulty system</p>
        </div>

        <div className="grid grid-cols-r21fr gap-0.9">
          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Created On</p>
            <p className="text-0.83 text-darkergrey2 font-medium">13/11/2034</p>
          </div>

          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Priority</p>
            <p className="text-0.83 text-darkergrey2 font-medium">High</p>
          </div>

          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Status</p>
            <p className="text-0.83 text-darkergrey2 font-medium">Opened</p>
          </div>
        </div>
      </div>

      <div className="flex gap-0.4 items-center justify-start absolute bg-white shadow-custom rounded-lg top-p18 right-m5 p-2 z-1 hover:bg-searchbarborder hover:transition">
        <span>{trashIcon}</span>
        <p className="py-0.4 px-0.3 text-0.83 cursor-pointer">Delete Ticket</p>
      </div>
    </div>
  );
};

export default Ticket;
