import { SlArrowDown,SlArrowUp } from "react-icons/sl";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Header = ({ month, year, setMonth, setYear }) => {
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="flex justify-between items-center h-10 mb-4">
        <div className="w-20"></div>
        <h2 
            className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">{months[month]} {year}
        </h2>
        <div className="flex gap-2">
            <button 
                className="rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-white hover:shadow font-bold"
                onClick={prevMonth}><SlArrowUp />
            </button>
            <button 
                className="rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-white hover:shadow font-bold"
                onClick={nextMonth}><SlArrowDown />
            </button>
        </div>
    </div>
  );
};

export default Header;
