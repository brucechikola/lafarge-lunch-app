import React, { useState } from 'react'

export default function Toggle(props) {
    const [toggle, setToggle] = useState(false)
    const {
        className,
        style,
        offText,
        onText,
        width = 80,
        height = 50,
        toggleClassName
    } = props
    return (
        <div
            className={`relative w-[${width}px] bg-white rounded-full h-[${height}px] ${className} cursor-pointer flex items-center justify-content`}
            style={{ width: width, height: height, ...style }}
        >
            <div
                style={style}
                onClick={null}
                className={`w-[50%] h-[90%] text-gray-800 font-semibold flex items-center justify-center rounded-full transition linear absolute ${toggleClassName}`}
            >
                {!toggle ? offText : onText}
            </div>
            <div
                style={style}
                onClick={null}
                className={`w-[50%] h-[90%] text-white font-semibold flex items-center justify-center rounded-full transition linear absolute right-0`}
            >
                {toggle ? offText : onText}
            </div>
        </div>
    )
}
