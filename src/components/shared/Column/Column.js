import React from 'react'

export default function Column(props) {
    const { className, style, justify = 'start', children } = props
    return (
        <div className={`w-full grid grid-cols-1 min-h-[30px] ${className} my-1`} style={style}>
            {children}
        </div>
    )
}
