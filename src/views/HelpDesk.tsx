import SearchBar from "../components/ui/SearchBar";
import Tabs from "../components/ui/Tabs";
import Ticket from "../features/helpdesk/components/Ticket";
import { helpdeskState } from "../features/helpdesk/data/helpdeskApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HelpDesk = () => {
  const [query, setQuery] = useState<string>("");

  const helpdeskData = useSelector(helpdeskState);
  const { tickets } = helpdeskData;

  const helpdeskTabs = [
    { id: "1", title: "Tickets", length: tickets.length },
    { id: "2", title: "Opened", length: tickets.length },
    { id: "3", title: "In Progress", length: tickets.length },
    { id: "4", title: "Closed", length: tickets.length },
  ];
  return (
    <section>
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search Ticket"
      />
      <Tabs tabsData={helpdeskTabs} />
      <div className="grid grid-cols-r41fr gap-4">
        <Ticket />
      </div>
    </section>
  );
};

export default HelpDesk;
