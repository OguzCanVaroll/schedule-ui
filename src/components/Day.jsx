import React from 'react';

const Day = ({ day, inCurrentMonth, setIsVisible }) => {
    const handleClick = () => 
    {
       if (inCurrentMonth) {
        setIsVisible(true);
    }
    };
    return (
     <button
        onClick={handleClick}
        disabled={!inCurrentMonth}
        className={`relative aspect-square border p-1 text-sm w-full text-center transition shadow
        ${inCurrentMonth ? 'cursor-pointer hover:bg-blue-100' : 'text-gray-400 opacity-50'}`}>

        <div className="absolute top-1 right-1 text-xs font-semibold">
          {day}
        </div>
    </button>

    
  );
};

export default Day;
