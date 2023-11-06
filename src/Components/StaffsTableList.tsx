import moreoptionsIcon from "../assets/icons/moreoptionsIcon";
import editIcon from "../assets/icons/editIcon";
import timeIcon from "../assets/icons/timeIcon";
import trashIcon from "../assets/icons/trashIcon";
import restoreIcon from "../assets/icons/restoreIcon";

const StaffsTableList = () => {
  return (
    <tbody>
      <tr>
        <td>
          <input
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
          />
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            David
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            davidokpala768gmail.com
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            Admin
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            08125672822
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            $4500
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            20hrs / week
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            22 y/o
          </p>
        </td>

        <td>
          <div className="cursor-pointer text-left">{moreoptionsIcon}</div>

          <div className="relative hidden">
            <div className="absolute right-0 bg-white shadow-custom rounded-lg p-2 z-5">
              <div className="flex flex-col gap-0.4">
                <div className="flex justify-start items-center gap-2 cursor-pointer p-0.3">
                  {editIcon}
                  <p className="text-xs">Edit</p>
                </div>

                <div className="flex justify-start items-center gap-2 cursor-pointer p-0.3">
                  <div className="text-sm scale-125">{restoreIcon}</div>
                  <p className="text-xs">Restore</p>
                </div>

                <div className="flex justify-start items-center gap-2 cursor-pointer p-0.3">
                  {timeIcon}
                  <p className="text-xs">Archive</p>
                </div>

                <div className="flex justify-start items-center gap-2 cursor-pointer p-0.3">
                  {trashIcon}
                  <p className="text-xs">Delete</p>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default StaffsTableList;
