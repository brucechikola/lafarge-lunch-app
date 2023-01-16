import React from 'react'
export default function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={`bg-white hover:bg-gray-100 border rounded-md p-2 min-w-[150px] h-[35px] flex items-center justify-center ${props.className}`}
            style={props.style}
        >
            {props.children}
        </button>
    )
}
