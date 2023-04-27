import React from 'react'

export default function Container(props) {
    const { className, style, children, minHeigh = '100vh' } = props
    return (
        <div
            className={`w-full min-h-[${minHeigh}] flex items-start justify-center ${className}`}
            style={style}
        >
            <div
                className={`w-4/5 h-full ${className}`}
                style={style}
            >
                {children}
            </div>
        </div>
    )
}
