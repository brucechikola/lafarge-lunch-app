import React from 'react'

export default function Slide(props) {
    const { children, className, style, background, ...rest } = props
    console.log(background)
    return (
        <div
            className={`w-full h-full absolute top-0 ${className}`}
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                ...style
            }}
        >
            {children}
        </div>
    )
}
