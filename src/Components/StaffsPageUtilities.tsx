import SearchBar from "./SearchBar";
import Button from "./Button";
import exportIcon from "../assets/icons/exportIcon";
import printIcon from "../assets/icons/printIcon";
import addUserIcon from "../assets/icons/addUserIcon";

const StaffsPageUtilities = () => {
  return (
    <section className="flex items-center justify-between">
      <SearchBar />
      <div className="flex gap-6 items-center justify-center">
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
        />
      </div>
    </section>
  );
};

export default StaffsPageUtilities;
