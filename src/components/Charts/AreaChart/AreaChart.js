import React, { useEffect } from 'react'
import RenderAreaChart from './Function'

export default function AreaChart(props) {

    useEffect(() => {
        RenderAreaChart()
    }, [])
    return (
        <div id="summaryChart" className='w-full'></div>
    )
}
