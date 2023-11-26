import doubleleftarrowIcon from "../../assets/icons/doubleleftarrowIcon";
import doublerightarrowIcon from "../../assets/icons/doublerightarrowIcon";

type PaginationType = {
  pageNumbers: number[];
  currentPage: number;
  paginate: (type: number) => void;
  paginateToFirst: () => void;
  paginateToLast: () => void;
};

const Pagination: React.FC<PaginationType> = ({
  pageNumbers,
  currentPage,
  paginate,
  paginateToFirst,
  paginateToLast,
}) => {
  return (
    <div className="flex items-center justify-center w-full relative my-6 h-12">
      <ul className="bg-white2 shadow-custom rounded-2xl flex py-0.2 px-2 justify-center items-center w-fit">
        <div
          className="cursor-pointer flex items-center justify-center text-grey13 py-0.4 px-2 rounded-tl-2xl rounded-bl-2xl rounded-tr rounded-br mr-2 hover:bg-primarycolour hover:text-white hover:transition"
          onClick={paginateToFirst}
        >
          {doubleleftarrowIcon}
        </div>

        {pageNumbers.map((num: number) => (
          <li key={num}>
            <button
              style={{
                backgroundColor:
                  currentPage === num ? "#6C63FF" : "transparent",
                color: currentPage === num ? "white" : "#7e7e7e",
              }}
              className="font-openSans text-customgrey text-xs font-medium py-0.4 px-0.7 rounded bg-transparent hover:bg-primarycolour hover:text-white hover:transition"
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          </li>
        ))}

        <div
          className="cursor-pointer flex items-center justify-center text-grey13 py-0.4 px-2 rounded-tr-2xl rounded-br-2xl rounded-tl rounded-bl ml-2 hover:bg-primarycolour hover:text-white hover:transition"
          onClick={paginateToLast}
        >
          {doublerightarrowIcon}
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
