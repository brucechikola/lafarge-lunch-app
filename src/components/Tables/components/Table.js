import React from 'react'

export default function Table(props) {
    return (
        <table {...props.tableProps} className={`p-3 text-left ${props.className} `} style={props.style}>
            {
                props.children
            }
        </table>
    )
}
