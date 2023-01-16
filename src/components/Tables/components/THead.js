import React from 'react'

export default function THead(props) {
    return (
        <thead className={props.className} style={props.style}>
            {props.children}
        </thead>
    )
}
