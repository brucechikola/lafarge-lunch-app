import React from 'react'

export default function Flex(props) {
    const { children, className, style, direction = 'row' } = props
    return (
        <div
            className={`flex items-center justify-center w-full h-full ${className}`}
            style={{ flexDirection: direction, ...style }}
        >
            {children}
        </div>
    )
}
