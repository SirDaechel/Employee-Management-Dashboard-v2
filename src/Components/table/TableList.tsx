import moreoptionsIcon from "../../assets/icons/moreoptionsIcon";
import editIcon from "../../assets/icons/editIcon";
import timeIcon from "../../assets/icons/timeIcon";
import trashIcon from "../../assets/icons/trashIcon";
import restoreIcon from "../../assets/icons/restoreIcon";

type TableListType = {
  id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  wage: number;
  workinghours: number;
  age: number;
};

const StaffsTableList: React.FC<TableListType> = ({
  id,
  name,
  email,
  role,
  phone,
  wage,
  workinghours,
  age,
}) => {
  return (
    <tbody>
      <tr key={id}>
        <td>
          <input
            id={id}
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
          />
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {name}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {email}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {role}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {phone}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            ${wage}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {workinghours} / week
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {age} y/o
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
