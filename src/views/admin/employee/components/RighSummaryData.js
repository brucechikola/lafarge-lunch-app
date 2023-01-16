import React from 'react'
import Badge from '../../../../components/shared/Badge'

export default function RighSummaryData({ title, bg, value, icon }) {
    return (
        <div className='w-full flex items-center justify-between my-3'>
            <div className='flex items-center justify-start'>
                <Badge background={bg} showPill={false} className="w-[30px] h-[30px] rounded-md">
                    <span className='font-bold'>{icon}</span>
                </Badge>
                <span className='ml-2 flex flex-col text-sm'>{
                    title}
                    <small className="text-gray-400 text-xs" style={{ fontSize: 11 }}>Displayed in total</small>
                </span>
            </div>
            <div className='text-gray-700 font-bold flex-col flex'>
                {value}
                <small className="text-gray-400 text-xs font-normal" style={{ fontSize: 11 }}>Grouped</small>
            </div>
        </div>
    )
}
