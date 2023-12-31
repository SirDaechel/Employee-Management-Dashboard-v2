import { useState } from "react";
import arrowLeft from "../../assets/icons/arrowLeft";
import arrowRight from "../../assets/icons/arrowRight";
import xIcon from "../../assets/icons/xIcon";

type CalendarType = {
  title: string;
  setProjectDate: React.Dispatch<React.SetStateAction<string>>;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const Calendar: React.FC<CalendarType> = ({
  title,
  setProjectDate,
  showCalendar,
  setShowCalendar,
  setError,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentDayOfMonth = currentDate.getDate();

  const handleDayClick = (day: number) => {
    const dayWithSuffix =
      day +
      (day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th");

    const theFullDate = `${dayWithSuffix} ${
      (currentDate.getMonth() + 1 === 1 && "January") ||
      (currentDate.getMonth() + 1 === 2 && "Febuary") ||
      (currentDate.getMonth() + 1 === 3 && "March") ||
      (currentDate.getMonth() + 1 === 4 && "April") ||
      (currentDate.getMonth() + 1 === 5 && "May") ||
      (currentDate.getMonth() + 1 === 6 && "June") ||
      (currentDate.getMonth() + 1 === 7 && "July") ||
      (currentDate.getMonth() + 1 === 8 && "August") ||
      (currentDate.getMonth() + 1 === 9 && "September") ||
      (currentDate.getMonth() + 1 === 10 && "October") ||
      (currentDate.getMonth() + 1 === 11 && "November") ||
      (currentDate.getMonth() + 1 === 12 && "December") ||
      currentDate.getMonth() + 1
    } ${currentDate.getFullYear().toString()}`;

    showCalendar && setProjectDate(theFullDate);
    showCalendar && setShowCalendar(false);
    setError("");
  };

  // Function to get the days of the week
  const getDaysOfWeek = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek.map((day) => (
      <th className="p-0.7" key={day}>
        <p className="font-medium font-poppins text-grey8 max-w-6">{day}</p>
      </th>
    ));
  };

  // Function to get the number of days in the current month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Function to generate the calendar grid
  const generateCalendar = () => {
    const daysOfWeek = getDaysOfWeek();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay();
    const calendar = [];

    for (let i = 0; i < startingDay; i++) {
      calendar.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <td
          onClick={() => handleDayClick(day)}
          className="py-0.7 px-0.3 font-poppins"
          key={`day-${day}`}
        >
          {
            <p
              className="p-0.3 rounded bg-lightgrey2 text-center cursor-pointer text-grey8"
              style={{
                backgroundColor: currentDayOfMonth === day ? "#6C63FF" : "",
                color: currentDayOfMonth === day ? "#FFF" : "",
              }}
            >
              {day}
            </p>
          }
        </td>
      );
    }

    const totalDays =
      daysOfWeek.length * Math.ceil(calendar.length / daysOfWeek.length);

    while (calendar.length < totalDays) {
      calendar.push(<td key={`empty-${calendar.length}`}></td>);
    }

    const calendarRows = [];
    for (let i = 0; i < totalDays; i += daysOfWeek.length) {
      const week = calendar.slice(i, i + daysOfWeek.length);
      calendarRows.push(<tr key={`week-${i}`}>{week}</tr>);
    }

    return calendarRows;
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  // Close Calendar
  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <section className="w-full min-h-max bg-white p-4 rounded-px10 flex flex-col gap-4 overflow-hidden shadow-custom scale-0.7 absolute bottom-0 left-0 right-0 ss:w-max ss:left-m25 xl:w-fit xl:left-m25 xl:top-p10 xxl:w-fit xxl:top-p10">
      <div className="flex items-center justify-between pb-4">
        <p className="text-base font-medium text-grey13 font-poppins">
          {title}
        </p>
        <button
          className="text-3xl p-0.4 bg-transparent text-grey13"
          onClick={() => closeCalendar()}
        >
          {xIcon}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center justify-center bg-transparent text-2xl text-grey13"
          onClick={() => goToPreviousMonth()}
        >
          {arrowLeft}
        </button>
        <p className="text-base font-medium text-grey13 font-poppins">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </p>
        <button
          type="button"
          className="flex items-center justify-center bg-transparent text-2xl text-grey13"
          onClick={() => goToNextMonth()}
        >
          {arrowRight}
        </button>
      </div>

      <table className="p-8">
        <thead>
          <tr>{getDaysOfWeek()}</tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </section>
  );
};

export default Calendar;
