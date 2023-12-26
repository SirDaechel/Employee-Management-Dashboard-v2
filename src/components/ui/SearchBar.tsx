import searchIcon from "../../assets/icons/searchIcon";
import xIcon from "../../assets/icons/xIcon";

type SearchType = {
  placeholder: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchType> = ({ placeholder, query, setQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearQuery = () => setQuery("");

  return (
    <section className="w-fit m:w-full">
      <div className="relative m:w-full">
        <div className="absolute left-p5 ss:left-p8 top-p29 font-light text-xl">
          {searchIcon}
        </div>

        <form>
          <input
            type="text"
            className="pt-3 pr-10 pb-3 pl-3.2 ss:pl-12 justify-center items-center rounded-brp125 border-px1 border-solid border-searchbarborder bg-white text-darkergrey font-roboto text-sm font-extralight m:w-full m:pr-12"
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
    </section>
  );
};

export default SearchBar;
