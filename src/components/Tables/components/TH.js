import React from 'react'

export default function TH(props) {
    return (
        <th {...props.headerProps} className={props.className} style={props.style} >
            {props.children}
        </th>
    )
}
