import moreoptionsIcon2 from "../../../assets/icons/moreoptionsIcon2";
import trashIcon from "../../../assets/icons/trashIcon";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setTickets } from "../data/helpdeskApiSlice";

type TicketsType = {
  ticket: any;
  ticketID: string;
  setTicketID: React.Dispatch<React.SetStateAction<string>>;
  initialTicket: any[];
};

const Ticket: React.FC<TicketsType> = ({
  ticket,
  ticketID,
  setTicketID,
  initialTicket,
}) => {
  const { id, subject, status, priority, createddate } = ticket;

  const [showDeleteTicket, setShowDeleteTicket] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toggleDeleteTicket = (id: string) => {
    if (ticketID === id) {
      // If the clicked ticket is the same as the stored ticketID, toggle the showDeleteticket state
      setShowDeleteTicket((prev) => !prev);
    } else {
      // If a different ticket is clicked, update the ticketID and show options
      setTicketID(id);
      setShowDeleteTicket(true);
    }
  };

  const deleteticket = (id: string) => {
    dispatch(setTickets(initialTicket.filter((ticket) => ticket.id !== id)));
  };

  return (
    <section className="w-full relative bg-white rounded-lg cursor-pointer transition">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-0.7 border-b-px2 border-b-solid border-b-barchartbg pb-4">
          <div className="flex items-center justify-between">
            <p className="py-0.3 px-0.7 bg-lightgrey3 text-primarycolour w-fit rounded font-medium text-0.9">
              {id}
            </p>
            <button
              type="button"
              className="cursor-pointer text-base"
              onClick={() => toggleDeleteTicket(id)}
            >
              {moreoptionsIcon2}
            </button>
          </div>
          <p className="font-semibold text-0.9 text-darkgrey">{subject}</p>
        </div>

        <div className="grid grid-cols-r21fr gap-0.9">
          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Created On</p>
            <p className="text-0.83 text-darkergrey2 font-medium">
              {createddate}
            </p>
          </div>

          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Priority</p>
            <p className="text-0.83 text-darkergrey2 font-medium">{priority}</p>
          </div>

          <div className="flex flex-col gap-0.3">
            <p className="text-xs font-semibold text-customgrey">Status</p>
            <p className="text-0.83 text-darkergrey2 font-medium">{status}</p>
          </div>
        </div>
      </div>

      {ticketID === id && showDeleteTicket && (
        <div className="flex gap-0.4 items-center justify-start absolute bg-white shadow-custom rounded-lg top-p18 right-0 p-2 z-1 hover:bg-searchbarborder hover:transition">
          <span>{trashIcon}</span>
          <p
            className="py-0.4 px-0.3 text-0.83 cursor-pointer"
            onClick={() => deleteticket(id)}
          >
            Delete Ticket
          </p>
        </div>
      )}
    </section>
  );
};

export default Ticket;
