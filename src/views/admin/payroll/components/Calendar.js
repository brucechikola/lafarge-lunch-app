import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../../css/calendar.css'
export default function CalendarWrapper() {
    const [value, onChange] = useState(new Date());
    return (
        <div className='w-full bg-white mim-h-[200px] p-5 shadow-default rounded-md flex items-center justify-center flex-col'>
            <span className="text-gray-500 text-sm mb-3 w-full">Payroll Calendar</span>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}
