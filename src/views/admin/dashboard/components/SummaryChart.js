import React from 'react'
import AreaChart from 'components/Charts/AreaChart/AreaChart'

export default function SummaryChart(props) {

    return (
        <div className='w-full h-full bg-white col-span-2 shadow-default rounded-md p-2'>

            <span className='text-gray-500 font-bold text-sm ml-4'>Theft Crimes</span>
            <AreaChart data={null} />
        </div>
    )
}
