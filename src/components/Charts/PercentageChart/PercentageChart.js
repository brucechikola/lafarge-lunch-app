import React, { useEffect } from 'react'
import RenderPercentageChart from './Function'

export default function PercentageChart() {
    useEffect(() => {
        RenderPercentageChart()
    }, [])
    return (
        <div id="percentageChart"></div>
    )
}
