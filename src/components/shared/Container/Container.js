import React from 'react'

export default function Container(props) {
    return (
        <div className='w-full min-h-[100vh] my-2 flex items-start justify-center'>
            <div
                className={`w-4/5 h-full ${props.className}`}
                style={props.style}
            >
                {props.children}
            </div>
        </div>
    )
}
