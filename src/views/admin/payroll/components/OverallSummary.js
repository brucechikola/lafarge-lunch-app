import React from 'react'
import MultiAxisChart from '../../../../components/MultiAxisChart'
export default function OverallSummary() {
    return (
        <div className='w-full min-h-[200px] bg-white rounded-md p-4 shadow-default col-span-2'>
            <span className="text-gray-500 mb-2">2023 - Overall Summary</span>
            <MultiAxisChart />
        </div>
    )
}
