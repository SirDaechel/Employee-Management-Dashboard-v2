import notificationsicon from "../../assets/icons/notificationIcon";
import adminPhoto from "../../assets/images/adminPhoto.webp";
import { notificationsState } from "../../features/notifications/data/notificationsApiSlice";
import { useSelector } from "react-redux";

type TopNavType = {
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopNav: React.FC<TopNavType> = ({ setShowNotifications, setOverlay }) => {
  //greeting with respect to time of the day
  const getGreeting = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 0 && currentTime < 12) {
      return "Good morning, David!";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good afternoon, David!";
    } else {
      return "Good evening, David!";
    }
  };

  const greeting = getGreeting();

  //get day and date
  const formatDate = (date: any) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formattedDate = formatDate(Date.now());

  const theNotifications = useSelector(notificationsState);
  const { notifications } = theNotifications;

  const toggleNotification = () => {
    setShowNotifications((prev) => !prev);
    setOverlay((prev) => !prev);
  };

  return (
    <header className="flex items-center ss:gap-0.5 justify-between mt-1.1">
      <article className="flex flex-col">
        <p className="text-darkgrey font-poppins font-semibold text-base ss:text-xs">
          {greeting}
        </p>
        <div className="font-semibold font-poppins text-lightgrey text-0.68 ss:text-0.6">
          {formattedDate}
        </div>
      </article>

      <div className="flex items-center justify-center gap-6">
        <div className="relative cursor-pointer">
          <p className="absolute w-1 h-1 bg-customred p-0.62 rounded-br50 text-white font-poppins text-0.7 flex items-center justify-center right-m35 top-m35 ss:text-0.7">
            {notifications.length}
          </p>

          <button
            type="button"
            className="text-xl text-darkgrey cursor-pointer"
            onClick={toggleNotification}
          >
            {notificationsicon}
          </button>
        </div>

        <div className="flex items-center justify-center gap-0.7">
          <img
            className="border-2 border-solid border-primarycolour rounded-br50 w-8 h-8 cursor-pointer"
            src={adminPhoto}
            alt="user photo"
          />

          <article className="flex flex-col font-poppins text-0.7 text-darkgrey m:hidden">
            <p className="font-semibold">David Okpala</p>
            <p>Administrator</p>
          </article>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
