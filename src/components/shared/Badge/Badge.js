import React from 'react'
export default function Badge(props) {
    const { className, background, showPill = true, pill } = props
    return (
        <div className={`px-2 text-sm rounded-full flex items-center justify-center ${background} ${className}`} style={props.style}>
            {
                showPill &&
                <div className={`w-[7px] h-[7px] mr-2 rounded-full text-sm ${pill}`}></div>
            }
            {props.children}
        </div>
    )
}