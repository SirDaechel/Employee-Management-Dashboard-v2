import notificationsicon from "../assets/icons/notificationIcon";

const TopNav = () => {
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

  return (
    <header className="flex items-center justify-between mt-1.1">
      <article className="flex flex-col">
        <p className="text-darkgrey font-poppins font-semibold text-base">
          {greeting}
        </p>
        <div className="font-semibold font-poppins text-lightgrey text-0.68">
          {formattedDate}
        </div>
      </article>

      <div className="flex items-center justify-center gap-6">
        <div className="relative cursor-pointer">
          <p className="absolute w-2 h-2 bg-customred p-0.62 rounded-br50 text-white font-poppins text-0.7 flex items-center justify-center right-m35 top-m35">
            4
          </p>

          <div className="text-2xl text-darkgrey cursor-pointer">
            {notificationsicon}
          </div>
        </div>

        <div className="flex items-center justify-center gap-0.7">
          <img
            className="border-2 border-solid border-primarycolour rounded-br50 w-2.8 h-2.8 cursor-pointer"
            src="../assets/images/StaffsPhoto/adminPhoto.png"
            alt="user photo"
          />

          <article className="flex flex-col font-poppins text-0.7 text-darkgrey">
            <p className="font-semibold">David Okpala</p>
            <p>Administrator</p>
          </article>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
