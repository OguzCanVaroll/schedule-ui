import React, { useState } from 'react';

const Home = () => {
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date;
    const [currentDay, setCurrentDay] = useState(today.getDate())
    const [currentMonth, setCurrentMonth] = useState(today.getMonth()); 
    const [currentYear, setCurrentYear] = useState(today.getFullYear()); 
    
    return (
    <div className="p-4 max-w-3xl mx-auto ">
        <div className=" mt-4">
        <h2 
            className="absolute left-1/2 -translate-x-1/2 text-xl font-bold"> {currentDay} {months[currentMonth]}  {currentYear} 
        </h2>
        </div>
    </div>
  )
}

export default Home
