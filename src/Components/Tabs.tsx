import filterIcon from "../assets/icons/filterIcon";

type TabsType = {
  tabsText: string[];
};

const Tabs: React.FC<TabsType> = ({ tabsText }) => {
  return (
    <section className="pt-4 px-0">
      <button className="hidden m:flex m:items-center m:justify-center m:gap-4 m:w-full m:bg-transparent m:text-customgrey m:font-roboto m:py-0.6 m:border-px1 m:border-solid m:border-customgrey m:rounded-lg m:mb-4 hover:bg-customgrey hover:text-white hover:transition">
        <span>{filterIcon}</span>
        <p>Filter by</p>
      </button>
      <article className="relative m:hidden">
        <div className="flex gap-5 m:gap-1.5 m:flex-col m:absolute m:left-0 m:right-0 m:top-0 m:z-10 m:border-px1 m:border-solid m:border-searchbarborder m:bg-white m:rounded m:shadow-custom">
          {tabsText.map((text: string) => (
            <div
              className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5  m:w-full m:items-center m:justify-between hover:bg-searchbarborder hover:transition"
              key={text}
            >
              <p className="w-max text-sm">{text}</p>
              <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
                60
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Tabs;
