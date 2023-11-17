import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import Ticket from "../components/Ticket";

const HelpDesk = () => {
  const helpdeskTabs: string[] = ["Tickets", "Opened", "In Prgress", "Closed"];
  return (
    <section>
      <SearchBar placeholder="Search Ticket" />
      <Tabs tabsData={helpdeskTabs} />
      <div className="grid grid-cols-r41fr gap-4">
        <Ticket />
      </div>
    </section>
  );
};

export default HelpDesk;
