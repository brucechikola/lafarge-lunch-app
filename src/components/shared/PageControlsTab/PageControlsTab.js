import React from 'react'

export default function PageControlsTab(props) {
    const { className, style } = props
    return (
        <div
            className={`w-full my-4 flex items-center justify-between ${className}`}
            style={style}
        >
            {props.children}
        </div>
    )
}
