import React from 'react'

export default function Card(props) {
    const { className, style, children, radius = 5 } = props
    return (
        <div
            className={`w-full h-full border  p-4 ${className}`}
            style={{
                borderRadius: radius,
                ...style
            }}
        >
            {
                children
            }
        </div>
    )
}
