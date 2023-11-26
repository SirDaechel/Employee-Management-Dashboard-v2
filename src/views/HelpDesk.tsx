import SearchBar from "../components/ui/SearchBar";
import Tabs from "../components/ui/Tabs";
import Ticket from "../features/helpdesk/components/Ticket";
import { useGetHelpdeskQuery } from "../features/helpdesk/data/helpdeskApiSlice";

const HelpDesk = () => {
  const { data: tickets, isSuccess } = useGetHelpdeskQuery({});
  const helpdeskTabs = [
    { id: "1", title: "Tickets", length: isSuccess && tickets.length },
    { id: "2", title: "Opened", length: isSuccess && tickets.length },
    { id: "3", title: "In Progress", length: isSuccess && tickets.length },
    { id: "4", title: "Closed", length: isSuccess && tickets.length },
  ];
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
