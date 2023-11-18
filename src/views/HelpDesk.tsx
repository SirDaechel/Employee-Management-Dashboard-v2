import SearchBar from "../components/ui/SearchBar";
import Tabs from "../components/ui/Tabs";
import Ticket from "../features/helpdesk/components/Ticket";

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
