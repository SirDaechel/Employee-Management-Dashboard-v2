import moreoptionsIcon from "../assets/icons/moreoptionsIcon";
import editIcon from "../assets/icons/editIcon";
import timeIcon from "../assets/icons/timeIcon";
import trashIcon from "../assets/icons/trashIcon";
import restoreIcon from "../assets/icons/restoreIcon";

type TableListType = {
  data: [];
  isSuccess: boolean;
  isLoading: boolean;
};

const StaffsTableList: React.FC<TableListType> = ({
  data,
  isSuccess,
  isLoading,
}) => {
  let tableList;

  if (isLoading) {
    tableList = (
      <tr>
        <td className="flex items-center justify-center">Loading...</td>
      </tr>
    );
  } else if (isSuccess) {
    tableList = data.map((d: any) => (
      <tr key={d.id}>
        <td>
          <input
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
            id={d.id}
          />
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {d.name}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {d.email}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {d.role}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max">
            {d.phone}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            ${d.wage}
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {d.workinghours} / week
          </p>
        </td>

        <td>
          <p className="text-darkergrey text-0.83 font-light font-roboto w-max pl-2">
            {d.age} y/o
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
    ));
  }

  return <tbody>{tableList}</tbody>;
};

export default StaffsTableList;
