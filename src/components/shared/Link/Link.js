import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Link(props) {
    const { style, className, children, title, to } = props
    const navigate = useNavigate()
    return (
        <span
            onClick={() => navigate(to)}
            className={`link flex items-center justify-start mx-3 text-gray-600 cursor-pointer hover:text-indigo-600 ${className}`}
            style={style}
        >
            {children || title || 'Title required'}
        </span>
    )
}
