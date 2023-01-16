import React from 'react'

export default function TD(props) {
    return (
        <td {...props.cellProps} className={props.className} style={props.style}>
            {props.children}
        </td>
    )
}
