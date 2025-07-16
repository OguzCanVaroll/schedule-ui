import React,{ useState } from 'react'
import { IoAdd, IoHomeOutline } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(false);        

  const width = open ? 'w-44' : 'w-16';            
  const toggleSidebar = () => setOpen(!open); 
  
  return (
   <div className={`fixed h-screen bg-gray-200 border border-gray-300 left-0 ${width} z-10 transition-all duration-300`}>
      
      <div className='flex flex-col h-full p-3 gap-4 mt-4'>
        
        <div className="flex-shrink-0">
          <button
            onClick={toggleSidebar}
            className={`rounded-md px-2 py-2 hover:bg-gray-300 cursor-pointer self-start ${open ? '' : 'flex items-center'}`}>
            <IoAdd />
          </button>
        </div>
      
        <ul className='flex flex-col gap-3'>
          <li>
            <Link 
             to="/home" 
              className='flex items-center rounded-md px-2 py-2 hover:bg-gray-300 transition-all cursor-pointer'>
              <IoHomeOutline /> 
              <span
                className={`text-sm ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 
                ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0' }`}>
                Ana Sayfa
              </span>
            </Link>
          </li>  

          <li>
            <Link
             to="/calendar" 
              className='flex items-center rounded-md px-2 py-2 hover:bg-gray-300 transition-all cursor-pointer'>
              <CiCalendar />
              <span
                className={`text-sm ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 
                ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0' }`}>
                Callendar
              </span>
            </Link>
          </li> 

          <li>
            <Link
              className='flex items-center rounded-md px-2 py-2 hover:bg-gray-300 transition-all cursor-pointer'>
              <TiWeatherCloudy /> 
              <span
                className={`text-sm ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 
                ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0' }`}>
                Weather
              </span>
            </Link>
         </li>
        
        </ul> 
      </div>
    </div>
  )
}

export default Sidebar
