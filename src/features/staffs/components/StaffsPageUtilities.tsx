import StaffsSearchBar from "./StaffsSearchBar";
import Button from "../../../components/ui/Button";
import exportIcon from "../../../assets/icons/exportIcon";
import printIcon from "../../../assets/icons/printIcon";
import addUserIcon from "../../../assets/icons/addUserIcon";
import { useState } from "react";
import { staffsState } from "../data/staffsApiSlice";
import { useSelector } from "react-redux";

const StaffsPageUtilities: React.FC = () => {
  const staffsData = useSelector(staffsState);
  const { staffs } = staffsData;

  const [query, setQuery] = useState<string>("");

  const filteredStaffsSearch: any[] = staffs.filter((staff: any) =>
    staff.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="flex items-center justify-between m:flex-col m:gap-4">
      <StaffsSearchBar
        placeholder="Search Staffs"
        query={query}
        setQuery={setQuery}
        filteredStaffsSearch={filteredStaffsSearch}
      />
      <div className="flex gap-6 items-center justify-center m:justify-between">
        <Button
          icon={exportIcon}
          text={"Export"}
          className="flex py-2.5 px-6 items-center justify-center gap-2.5 rounded-2xl border-px1 border-solid border-searchbarborder bg-white text-darkgrey text-0.83"
        />
        <Button
          icon={printIcon}
          text={"Print"}
          className="flex py-2.5 px-6 items-center justify-center gap-2.5 rounded-2xl border-px1 border-solid border-searchbarborder bg-white text-darkgrey text-0.83"
        />
        <Button
          icon={
            <div className="flex items-center justify-center w-px17 h-px17 text-xl">
              {addUserIcon}
            </div>
          }
          text={"Create"}
          className="flex py-2.5 px-6 items-center justify-center gap-2.5 rounded-2xl border-px1 border-solid border-searchbarborder bg-primarycolour text-white text-0.83"
          linkTo="addstaff"
        />
      </div>
    </section>
  );
};

export default StaffsPageUtilities;
