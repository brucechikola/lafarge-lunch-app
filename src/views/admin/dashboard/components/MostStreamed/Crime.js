import React from 'react'

export default function Crime({ title, total, icon }) {
    return (
        <div className='w-[90%] flex items-center justify-between my-3'>
            <div className='flex items-center justify-center'>
                <div className='w-[30px] h-[30px] flex items-center justify-center bg-defaultcolor rounded-md mr-3'>
                    {icon}
                </div>
                <span className='text-[14px]'>{title}</span>
            </div>
            {total}
        </div>
    )
}
