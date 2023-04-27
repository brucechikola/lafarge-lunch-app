import React from 'react'
export default function Action(props) {
    const { style, className, children, title } = props
    return (
        <div
            onClick={props.onClick}
            className={`mx-3 text-gray-600 cursor-pointer hover:text-indigo-600 ${className}`}
            style={style}
        >
            {children || title || 'Title required'}
        </div>
    )
}
