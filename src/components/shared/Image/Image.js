import React from 'react'

export default function Image(props) {
    const {
        style,
        className,
        path,
        fill,
        size,
        height = undefined,
        width = undefined,
        resizeMethod = ''
    } = props
    const allowFill = fill ? { width: fill ? '100%' : '', height: fill ? '100%' : '' } : ''
    return (
        <img
            style={{
                style,
                objectFit: resizeMethod,
                width: width || size,
                height: height || size,
                ...allowFill,
            }}
            className={`m-0 ${className}`}
            src={path}
        />
    )
}
