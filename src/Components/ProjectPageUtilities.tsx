import Button from "./Button";
import SearchBar from "./SearchBar";
import plusIcon from "../assets/icons/plusIcon";

const ProjectPageUtilities: React.FC = () => {
  return (
    <div className="flex items-center justify-between m:gap-4">
      <SearchBar placeholder="Search Projects" />
      <Button
        icon={
          <span className="flex items-center justify-center w-px17 h-px17 text-xl">
            {plusIcon}
          </span>
        }
        text="Create"
        className="flex py-2.5 px-6 items-center justify-center gap-2.5 rounded-2xl border-px1 border-solid border-searchbarborder bg-primarycolour text-white text-0.83"
        linkTo="addproject"
      />
    </div>
  );
};

export default ProjectPageUtilities;
