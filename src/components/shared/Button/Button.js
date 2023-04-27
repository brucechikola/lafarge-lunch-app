import React from 'react'
export default function Button(props) {
    const {
        style,
        className = '',
        children,
        background = !className.includes('bg-') ? 'white' : '',
        disabled,
        onClick,
        minWidth = "60px",
        minheight = "20px",
        type = "submit"
    } = props
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`hover:bg-gray-100 border bg-[${background}] rounded-md p-2 min-w-[${minWidth}] min-h-[${minheight}] flex items-center justify-center ${className}`}
            style={{
                background: background,
                ...style
            }}
            {...props.rest}
        >
            {children}
        </button>
    )
}
