import { useState } from "react";
import searchIcon from "../assets/icons/searchIcon";
import xIcon from "../assets/icons/xIcon";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <section className="w-fit">
      <div className="relative flex">
        <div className="absolute left-p5 top-p29 font-light text-xl">
          {searchIcon}
        </div>

        <form>
          <input
            type="text"
            className="flex pt-3 pr-10 pb-3 pl-3.2 justify-center items-center rounded-brp125 border-px1 border-solid border-searchbarborder bg-white w-80 text-darkergrey font-roboto text-sm font-extralight"
            value={query}
            placeholder="Search staffs"
            onChange={(e) => handleInputChange(e)}
          />
        </form>

        <div className="absolute right-p5 top-p22 text-xl cursor-pointer">
          {xIcon}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
