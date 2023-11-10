import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";
import Ticket from "../Components/Ticket";

const HelpDesk = () => {
  const helpdeskTabs: string[] = ["Tickets", "Opened", "In Prgress", "Closed"];
  return (
    <section>
      <SearchBar placeholder="Search Ticket" />
      <Tabs tabsText={helpdeskTabs} />
      <div className="grid grid-cols-r41fr gap-4">
        <Ticket />
      </div>
    </section>
  );
};

export default HelpDesk;
