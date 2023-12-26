import SearchBar from "../components/ui/SearchBar";
import Tabs from "../components/ui/Tabs";
import Ticket from "../features/helpdesk/components/Ticket";
import { helpdeskState } from "../features/helpdesk/data/helpdeskApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { filterArrayOnInput } from "../utils/filterArrayOnInput";

const HelpDesk = () => {
  const [query, setQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);

  const helpdeskData = useSelector(helpdeskState);
  const { tickets } = helpdeskData;

  //get number of tickets with a status of in progress
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  );

  //get number of tickets with a status of opened
  const openedTickets = tickets.filter((ticket) => ticket.status === "Opened");

  //get number of tickets with a status of completed
  const closedTickets = tickets.filter((ticket) => ticket.status === "Closed");

  //filtered all tickets array based on search box input
  const filteredSearch = filterArrayOnInput(tickets, "subject", query);

  //filtered opened tickets array based on search box input
  const filteredOpenedSearch = filterArrayOnInput(
    openedTickets,
    "subject",
    query
  );

  //filtered in progress tickets array based on search box input
  const filteredInProgressSearch = filterArrayOnInput(
    inProgressTickets,
    "subject",
    query
  );

  //filtered closed tickets array based on search box input
  const filteredClosedSearch = filterArrayOnInput(closedTickets, "name", query);

  const helpdeskTabs = [
    { id: "1", title: "All Tickets", length: tickets.length },
    { id: "2", title: "Opened", length: openedTickets.length },
    { id: "3", title: "In Progress", length: inProgressTickets.length },
    { id: "4", title: "Closed", length: closedTickets.length },
  ];

  const [ticketID, setTicketID] = useState<string>("");

  return (
    <section>
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search Ticket"
      />
      <Tabs
        tabsData={helpdeskTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="grid grid-cols-r41fr gap-4 m:flex m:flex-col m:gap-4 xl:grid-cols-r21fr xxl:grid-cols-r31fr">
        {activeTab === 0 &&
          filteredSearch.map((ticket) => (
            <Ticket
              initialTicket={tickets}
              key={ticket.id}
              ticket={ticket}
              ticketID={ticketID}
              setTicketID={setTicketID}
            />
          ))}
        {activeTab === 1 &&
          filteredOpenedSearch.map((ticket) => (
            <Ticket
              initialTicket={tickets}
              key={ticket.id}
              ticket={ticket}
              ticketID={ticketID}
              setTicketID={setTicketID}
            />
          ))}
        {activeTab === 2 &&
          filteredInProgressSearch.map((ticket) => (
            <Ticket
              initialTicket={tickets}
              key={ticket.id}
              ticket={ticket}
              ticketID={ticketID}
              setTicketID={setTicketID}
            />
          ))}
        {activeTab === 3 &&
          filteredClosedSearch.map((ticket) => (
            <Ticket
              initialTicket={tickets}
              key={ticket.id}
              ticket={ticket}
              ticketID={ticketID}
              setTicketID={setTicketID}
            />
          ))}
      </div>
    </section>
  );
};

export default HelpDesk;
