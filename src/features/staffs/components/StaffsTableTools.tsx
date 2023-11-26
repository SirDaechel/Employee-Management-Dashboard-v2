import flagIcon from "../../../assets/icons/flagIcon";
import restoreIcon from "../../../assets/icons/restoreIcon";
import timeIcon from "../../../assets/icons/timeIcon";
import trashIcon from "../../../assets/icons/trashIcon";
import mailIcon from "../../../assets/icons/mailIcon";
import arrowdownIcon from "../../../assets/icons/arrowdownIcon";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifyPageSize } from "../../../store/StaffsPerPageSlice";
import { selectStaffPageSize } from "../../../store/StaffsPerPageSlice";
import { useGetStaffsQuery } from "../data/staffsApiSlice";

const TableTools: React.FC = () => {
  // save the current staffsPerPage value
  const pageSize = useSelector(selectStaffPageSize);
  const { staffsPerPage } = pageSize;

  const dispatch = useDispatch();

  const [pageSizeNumber, setPageSizeNumber] = useState<number>(10);

  // handle page size change
  const handleChangePageSize = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (e.currentTarget.textContent) {
      setPageSizeNumber(Number(e.currentTarget.textContent));
    }
  };

  // update the staffsPerPage global state when the pageSizeNumber state changes
  useEffect(() => {
    dispatch(modifyPageSize(pageSizeNumber));
  }, [pageSizeNumber]);

  const { data: staffs, isSuccess } = useGetStaffsQuery({});

  return (
    <div className="flex items-center justify-between w-full mb-0.62">
      <p className="text-grey6 font-openSans text-0.83 font-extralight m:hidden">
        {isSuccess && `Showing ${staffsPerPage}-${staffs.length} result`}
      </p>

      <div className="flex items-center justify-center gap-8 m:justify-between m:w-full">
        <div className="relative flex items-center justify-center gap-8">
          <div className="relative flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <p className="absolute top-m140 left-m20 text-0.625 bg-grey7 p-0.2 rounded-lg text-center w-p140 transition hidden">
                Please check more than one user
              </p>

              <button className="flex items-center justify-center gap-2 bg-white2 border-px1 border-solid border-grey8 rounded-lg py-2 px-2.5 text-0.83 text-grey8">
                {flagIcon}
                <p>Take actions</p>
              </button>
            </div>

            <div className="absolute top-0 right-p120 bg-white py-0.7 px-0.6 rounded-lg shadow-custom z-10 min-w-p120 overflow-hidden transition m:left-p110 hidden">
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
          <p className="text-grey6 font-openSans text-0.83 font-extralight">
            Staffs Per Page
          </p>

          <div className="relative">
            <div className="flex py-1.5 px-4 justify-center items-center gap-2.5 rounded-lg border-px1 border-solid border-grey8 cursor-pointer">
              <p className="text-darkergrey font-roboto font-light">
                {pageSizeNumber}
              </p>
              <div className="flex text-base">{arrowdownIcon}</div>
            </div>

            <ul className="absolute z-10 w-full flex flex-col gap-0.3 text-center mt-0.3 p-0.3 rounded-px5 bg-white shadow-custom2 border-px1 border-solid border-searchbarborder">
              <li className="cursor-pointer">
                <p
                  className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                  onClick={handleChangePageSize}
                >
                  10
                </p>
              </li>

              <li className="cursor-pointer">
                <p
                  className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                  onClick={handleChangePageSize}
                >
                  15
                </p>
              </li>

              <li className="cursor-pointer">
                <p
                  className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                  onClick={handleChangePageSize}
                >
                  20
                </p>
              </li>

              <li className="cursor-pointer">
                <p
                  className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                  onClick={handleChangePageSize}
                >
                  25
                </p>
              </li>

              <li className="cursor-pointer">
                <p
                  className="text-darkergrey font-roboto text-sm font-light hover:bg-primarycolour hover:text-white2 transition"
                  onClick={handleChangePageSize}
                >
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
