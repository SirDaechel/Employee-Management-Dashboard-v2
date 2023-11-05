import flagIcon from "../assets/icons/flagIcon";
import restoreIcon from "../assets/icons/restoreIcon";
import timeIcon from "../assets/icons/timeIcon";
import trashIcon from "../assets/icons/trashIcon";
import mailIcon from "../assets/icons/mailIcon";
import arrowdownIcon from "../assets/icons/arrowdownIcon";

const TableTools = () => {
  return (
    <div className="flex items-center justify-between w-full mb-0.62">
      <p className="text-grey6 font-openSans text-xs font-extralight">
        Showing 10-10 result
      </p>

      <div className="flex items-center justify-center gap-8">
        <div className="relative flex items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <p className="absolute top-m140 left-m20 text-0.625 bg-grey7 p-0.2 rounded-lg text-center w-p140 transition hidden">
                Please check more than one user
              </p>

              <button className="flex items-center justify-center gap-2 bg-white2 border-px1 border-solid border-grey8 rounded-lg py-2 px-2.5 text-0.7 text-grey8">
                {flagIcon}
                <p>Take actions</p>
              </button>
            </div>

            <div className="absolute top-0 right-p120 bg-white py-0.7 px-0.6 rounded-lg shadow-custom z-10 min-w-p120 overflow-hidden transition hidden">
              <ul className="flex flex-col gap-1 text-0.83 overflow-hidden">
                <li className="py-1.5 px-0.3 flex items-center justify-start gap-2.5">
                  <div className="text-sm scale-125">{restoreIcon}</div>
                  <p>Restore all</p>
                </li>

                <li className="py-1.5 px-0.3 flex items-center justify-start gap-2.5">
                  <div className="text-sm">{timeIcon}</div>
                  <p>Archive all</p>
                </li>

                <li className="py-1.5 px-0.3 flex items-center justify-start gap-2.5">
                  <div className="text-sm">{trashIcon}</div>
                  <p>Delete all</p>
                </li>

                <li className="py-1.5 px-0.3 flex items-center justify-start gap-2.5">
                  <div className="text-sm">{mailIcon}</div>
                  <p>Send Mail</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5">
          <p className="text-grey6 font-openSans text-xs font-extralight">
            Users Per Page
          </p>

          <div className="relative">
            <div className="flex py-0.3 px-4 justify-center items-center gap-2.5 rounded-lg border-px1 border-solid border-grey8 cursor-pointer">
              <p className="text-darkergrey font-roboto text-xs font-light">
                10
              </p>
              <div className="flex">{arrowdownIcon}</div>
            </div>

            <ul className="absolute z-10 w-full hidden flex-col gap-0.3 text-center mt-0.3 p-0.3 rounded-0.625 bg-white shadow-custom2 border-px1 border-solid border-searchbarborder">
              <li className="cursor-pointer">
                <p className="text-darkergrey font-roboto text-xs font-light hover:bg-primarycolour hover:text-white2 transition">
                  10
                </p>
              </li>

              <li className="cursor-pointer">
                <p className="text-darkergrey font-roboto text-xs font-light hover:bg-primarycolour hover:text-white2 transition">
                  15
                </p>
              </li>

              <li className="cursor-pointer">
                <p className="text-darkergrey font-roboto text-xs font-light hover:bg-primarycolour hover:text-white2 transition">
                  20
                </p>
              </li>

              <li className="cursor-pointer">
                <p className="text-darkergrey font-roboto text-xs font-light hover:bg-primarycolour hover:text-white2 transition">
                  25
                </p>
              </li>

              <li className="cursor-pointer">
                <p className="text-darkergrey font-roboto text-xs font-light hover:bg-primarycolour hover:text-white2 transition">
                  30
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTools;
