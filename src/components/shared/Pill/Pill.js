import React from 'react'

export default function Pill({ size = 5, color = 'bg-indigo-800', style, innerPillColor = 'gray', innerPillSize = '30%', }) {
    return (
        <div
            className='rounded-full mx-1 flex items-center justify-center'
            style={{ width: size, height: size, backgroundColor: color, ...style }}>
            <div className={`rounded-full w-[50%] h-[50%]`} style={{ backgroundColor: innerPillColor, width: innerPillSize, height: innerPillSize }}></div>
        </div>
    )
}
