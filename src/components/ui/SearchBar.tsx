import searchIcon from "../../assets/icons/searchIcon";
import xIcon from "../../assets/icons/xIcon";

type SearchType = {
  placeholder: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredStaffsSearch: any[];
};

const SearchBar: React.FC<SearchType> = ({
  placeholder,
  query,
  setQuery,
  filteredStaffsSearch,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearQuery = () => setQuery("");

  return (
    <section className="w-fit m:w-full">
      <div className="relative m:w-full">
        <div className="absolute left-p5 top-p29 font-light text-xl">
          {searchIcon}
        </div>

        <form>
          <input
            type="text"
            className="pt-3 pr-10 pb-3 pl-3.2 justify-center items-center rounded-brp125 border-px1 border-solid border-searchbarborder bg-white text-darkergrey font-roboto text-sm font-extralight m:w-full m:pr-12"
            value={query}
            placeholder={placeholder}
            onChange={(e) => handleInputChange(e)}
          />
        </form>

        {query && (
          <div
            className="absolute right-p5 top-p22 text-xl cursor-pointer hover:text-red2 hover:transition"
            onClick={clearQuery}
          >
            {xIcon}
          </div>
        )}
      </div>

      {query && (
        <div className="relative mt-2">
          <div className="absolute z-7 flex flex-col gap-0.3 w-full bg-white py-2 px-4 rounded-0.7 shadow-custom overflow-y-scroll max-h-vh30">
            {filteredStaffsSearch.length === 0 ? (
              <p>No results found</p>
            ) : (
              <ul>
                {filteredStaffsSearch.map((staff: any) => (
                  <li
                    key={staff.id}
                    className="cursor-pointer p-0.7 text-sm hover:bg-grey9"
                  >
                    {staff.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchBar;
