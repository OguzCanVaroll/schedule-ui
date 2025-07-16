import React, { useState } from 'react';
import Header from './Header';
import Day from './Day';
import Todo from './Todo';
import { getMonthMatrix } from '../utils/dateUtils';

const Calendar = () => {
  const today = new Date(); // Bugünün tarihi alınır
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Ayı tut
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Yılı tut

  const monthData = getMonthMatrix(currentYear, currentMonth); // Ayın günlerini matris olarak al
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-4 max-w-3xl mx-auto " id='Calendar'>
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
            <Day key= {`${i}-${j}`} 
                      {...dayObj} 
                      currentMonth={currentMonth}
                      setIsVisible={setIsVisible} />
          ))
        )}
      </div>
     {/* Modal gösterme alanı */}
      
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <Todo closeModal={() => setIsVisible(false)} />
        </div>
      )}
    
    </div>
  );
};

export default Calendar;
