import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";

const HelpDesk = () => {
  const helpdeskTabs: string[] = ["Tickets", "Opened", "In Prgress", "Closed"];
  return (
    <section>
      <SearchBar placeholder="Search Ticket" />
      <Tabs tabsText={helpdeskTabs} />
    </section>
  );
};

export default HelpDesk;
