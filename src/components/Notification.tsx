import teamIcon from "../assets/icons/teamIcon";
import avatar1 from "../assets/images/avatar (1).webp";

const Notification: React.FC = () => {
  return (
    <section className="flex items-start justify-start pb-4 gap-4 border-b-px1 border-b-solid border-b-white3">
      <img
        className="w-10 h-10 rounded-br50 border-px2 border-solid border-primarycolour"
        src={avatar1}
        alt=""
      />

      <article>
        <p className="text-xs text-customgrey font-normal font-poppins">
          <span className="text-darkergrey text-sm font-medium">
            David Okpala
          </span>{" "}
          This is where the notification will be!
        </p>

        <div className="flex items-center justify-start gap-2 mt-2">
          <div className="text-primarycolour">{teamIcon}</div>
          <p className="text-xs text-customgrey font-normal font-poppins">
            Admins
          </p>
        </div>
        <div className="flex items-center justify-start gap-3 mt-2">
          <button className="text-xs font-normal p-2 font-roboto rounded-px5 border-px1 border-solid border-grey10">
            Decline
          </button>
          <button className="text-xs font-normal p-2 font-roboto rounded-px5 bg-primarycolour text-white hover:bg-hoverprimarycolour hover:transition">
            Approve
          </button>
        </div>
      </article>

      <div className="text-xs text-customgrey font-medium font-poppins">2d</div>
    </section>
  );
};

export default Notification;
