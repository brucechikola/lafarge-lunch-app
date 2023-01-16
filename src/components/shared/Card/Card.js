import React from 'react'

export default function Card(props) {
    return (
        <div
            className={`w-full h-full border rounded-md p-4 ${props.className}`}
            style={props.style}
        >
            {
                props.children
            }
        </div>
    )
}
