import doubleleftarrowIcon from "../../assets/icons/doubleleftarrowIcon";
import doublerightarrowIcon from "../../assets/icons/doublerightarrowIcon";

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full relative my-6 h-12">
      <ul className="bg-white2 shadow-custom rounded-2xl flex py-0.2 px-2 justify-center items-center w-fit">
        <div className="cursor-pointer flex items-center justify-center text-grey13 py-0.4 px-2 rounded-tr-2xl rounded-br-2xl rounded-tl rounded-bl">
          {doubleleftarrowIcon}
        </div>

        <li>
          <button className="font-openSans text-xs font-medium py-0.4 px-0.7 rounded bg-primarycolour text-white">
            1
          </button>
        </li>
        <li>
          <button className="font-openSans text-customgrey text-xs font-medium py-0.4 px-0.7 rounded bg-transparent">
            2
          </button>
        </li>

        <div className="cursor-pointer flex items-center justify-center text-grey13 py-0.4 px-2 rounded-tr-2xl rounded-br-2xl rounded-tl rounded-bl">
          {doublerightarrowIcon}
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
