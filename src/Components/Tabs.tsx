type TabsType = {
  tabsText: string[];
};

const Tabs = ({ tabsText }: TabsType) => {
  return (
    <article className="flex gap-5 py-4 px-0">
      {tabsText.map((text: string) => (
        <div
          className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5"
          key={text}
        >
          <p className="w-max text-sm">{text}</p>
          <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
            60
          </span>
        </div>
      ))}
    </article>
  );
};

export default Tabs;
