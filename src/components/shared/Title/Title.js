import React from 'react'

export default function Title(props) {
    return (
        <div
            className={`flex flex-col`}
            style={props.style}
        >
            <h3 className={`font-bold ${props.className}`} style={props.style}>{props.title}</h3>
            {
                props.subTitle && <span className='text-gray-500 text-md'>{props.subTitle}</span>
            }
        </div>
    )
}
