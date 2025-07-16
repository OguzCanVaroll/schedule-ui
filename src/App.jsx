import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (
   <div className="min-h-screen bg-gray-100">
      <Sidebar />
       <div >
        <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
