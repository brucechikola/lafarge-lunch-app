import React from 'react'
import { BsArrowDownRightSquareFill } from 'react-icons/bs'
export default function Expense(props) {
    const { title, value, bg } = props
    return (
        <div className='w-full flex items-center justify-start mb-4'>
            <div className={`flex items-center justify-center ${bg} p-2 rounded-md text-white`}>
                <BsArrowDownRightSquareFill size={12} />
            </div>
            <div className='w-full flex items-center justify-between bg-indig ml-2'>
                <span className='text-gray-600 text-sm'>{title}</span>
                <span className='text-green-500 font-semibold text-sm'>
                    zmw {value}
                </span>
            </div>
        </div>
    )
}
