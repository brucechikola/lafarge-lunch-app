import React from 'react'
import './css/grid.css'
export default function Grid(props) {
    const {
        className,
        style,
        columns = 2,
        children,
        gap = undefined,
        gapX = undefined,
        gapY = undefined,
    } = props
    return (
        <div
            className={`grid w-full grid ${className}`}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: gap || gapX || gapY, ...style }} >
            {children}
        </div>
    )
}
