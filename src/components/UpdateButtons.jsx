import React from 'react'
import { useNavigate  } from 'react-router-dom'

export default function UpdateButtons() {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex flex-col space-y-4">
        <button
          onClick={() => navigate("/day1-attendance/mark-attendance")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
        >
          Day 1 Attendance
        </button>
        <button
          onClick={() => navigate("/day1-lunch/mark-done")}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition"
        >
          Day 1 Lunch
        </button>
        <button
          onClick={() => navigate("/day1-dinner/mark-done")}
          className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-md transition"
        >
          Day 1 Dinner
        </button>
        <button
          onClick={() => navigate("/day2-breakfast/mark-done")}
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition"
        >
          Day 2 Breakfast
        </button>
      </div>      
    </>
  )
}
