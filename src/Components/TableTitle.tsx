import arrowdownIcon from "../assets/icons/arrowdownIcon";
import arrowupIcon from "../assets/icons/arrowupIcon";

const StaffsTableTitle: React.FC = () => {
  return (
    <thead className="border-b-px2 border-b-solid border-b-bodycolour">
      <tr>
        <th>
          <input
            className="flex w-6 h-6 rounded-lg border-px1 border-solid border-searchbarborder bg-white2 text-left"
            type="checkbox"
          />
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition">
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Name
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit hidden">
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">acending</p>
              </div>
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">descending</p>
              </div>
            </div>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Email
            </p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">Role</p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <p className="text-grey6 font-poppins text-0.83 font-light">
              Phone
            </p>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition">
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Wage
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit hidden">
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">acending</p>
              </div>
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">descending</p>
              </div>
            </div>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition">
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Hours
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit hidden">
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">acending</p>
              </div>
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">descending</p>
              </div>
            </div>
          </div>
        </th>

        <th>
          <div className="w-fit text-left relative">
            <div className="flex items-center justify-start gap-2.5 cursor-pointer w-fit p-2 rounded-lg hover:bg-grey9 hover:transition">
              <p className="text-grey6 font-poppins text-0.83 font-light">
                Age
              </p>
              <div className="flex flex-col text-0.68 text-grey6">
                {arrowupIcon}
                {arrowdownIcon}
              </div>
            </div>

            <div className="flex-col gap-0.3 absolute bg-white py-2 px-1 rounded-lg shadow-custom z-10 top-full w-fit hidden">
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">acending</p>
              </div>
              <div className="cursor-pointer">
                <p className="text-xs font-light py-0.3 px-0.4">descending</p>
              </div>
            </div>
          </div>
        </th>

        <th></th>
      </tr>
    </thead>
  );
};

export default StaffsTableTitle;
