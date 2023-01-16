import React from 'react'

export default function TR(props) {
    return (
        <tr {...props.rowProps} className={props.className} style={props.style}>
            {props.children}
        </tr>
    )
}
