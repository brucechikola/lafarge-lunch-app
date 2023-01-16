import React from 'react'

export default function TBody(props) {
    return (
        <tbody {...props.bodyProps} className={`text-gray-600 ${props.className}`} style={props.style}>
            {props.children}
        </tbody>
    )
}
