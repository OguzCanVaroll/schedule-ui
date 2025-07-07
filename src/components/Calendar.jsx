import React, { useState } from 'react';
import Header from './Header';
import Day from './Day';
import { getMonthMatrix } from '../utils/dateUtils';

const Calendar = () => {
  const today = new Date(); // Bugünün tarihi alınır
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Ayı tut
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Yılı tut

  const monthData = getMonthMatrix(currentYear, currentMonth); // Ayın günlerini matris olarak al

  return (
    <div className="p-4 max-w-5xl mx-auto ">
      {/* Üstteki başlık ve butonlar */}
      <Header
        month={currentMonth}
        year={currentYear}
        setMonth={setCurrentMonth}
        setYear={setCurrentYear}
      />

      {/* Haftanın gün başlıkları */}
      <div className="grid grid-cols-7 gap-2 mt-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'].map((day, i) => (
          <div key={i} className="text-center font-semibold">{day}</div>
        ))}

        {/* 42 adet kutucuk (7 gün x 6 hafta) */}
        {monthData.map((week, i) =>
          week.map((dayObj, j) => (
            <Day key={`${i}-${j}`} {...dayObj} currentMonth={currentMonth} />
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
