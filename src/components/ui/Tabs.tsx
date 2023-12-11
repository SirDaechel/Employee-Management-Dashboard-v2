import filterIcon from "../../assets/icons/filterIcon";
import { useState } from "react";

type TabsType = {
  tabsData: any[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<TabsType> = ({ tabsData, activeTab, setActiveTab }) => {
  const [openMobileTab, setOpenMobileTab] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setOpenMobileTab(false);
  };

  return (
    <section className="py-4 px-0">
      <button
        className="hidden m:flex m:items-center m:justify-center m:gap-4 m:w-full m:bg-transparent m:text-customgrey m:font-roboto m:py-0.6 m:border-px1 m:border-solid m:border-customgrey m:rounded-lg m:mb-4 hover:m:bg-primarycolour hover:m:border-0 hover:m:text-white hover:m:transition"
        onClick={() => setOpenMobileTab(!openMobileTab)}
      >
        <span>{filterIcon}</span>
        <p>Filter by</p>
      </button>
      <article className="relative">
        {/* larger screen size */}
        <div className="flex gap-5 m:hidden m:gap-1.5 m:flex-col m:absolute m:left-0 m:right-0 m:top-0 m:z-10 m:border-px1 m:border-solid m:border-searchbarborder m:bg-white m:rounded m:shadow-custom">
          {tabsData.map((data, index: number) => (
            <button
              className={`py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5  m:w-full m:items-center m:justify-between hover:m:bg-searchbarborder hover:m:transition ${
                activeTab === index && "active-tab"
              }`}
              key={data.id}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={`w-max text-sm ${
                  activeTab === index && "active-tab-txt"
                }`}
              >
                {data.title}
              </p>
              <span
                className={`flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light ${
                  activeTab === index && "active-tab-no"
                }`}
              >
                {data.length}
              </span>
            </button>
          ))}
        </div>
        {/* smaller screen size */}
        <div
          className="lg:hidden xl:hidden xxl:hidden xxxl:hidden m:flex m:gap-1.5 m:flex-col m:absolute m:left-0 m:right-0 m:top-0 m:z-10 m:border-px1 m:border-solid m:border-searchbarborder m:bg-white m:rounded m:shadow-custom"
          style={{ display: openMobileTab ? "flex" : "none" }}
        >
          {tabsData.map((data, index: number) => (
            <button
              className={`py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5  m:w-full m:items-center m:justify-between hover:m:bg-searchbarborder hover:m:transition ${
                activeTab === index && "active-tab"
              }`}
              key={data.id}
              onClick={() => handleTabClick(index)}
            >
              <p
                className={`w-max text-sm ${
                  activeTab === index && "active-tab-txt"
                }`}
              >
                {data.title}
              </p>
              <span
                className={`flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light ${
                  activeTab === index && "active-tab-no"
                }`}
              >
                {data.length}
              </span>
            </button>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Tabs;
