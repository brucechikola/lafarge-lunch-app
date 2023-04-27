import React from 'react'

export default function Slider(props) {
    const { children, className, style, ...rest } = props
    return (
        <div className={`w-full h-full flex min-h-[200px] ${className}`} style={style}>
            {children}
        </div>
    )
}
