import React from 'react'

export default function CheckField(props) {
    const {
        onChange,
        className,
        style,
        title,
        value,
        checked,
        disabled = false,
        forwardedRef = '',
        size = 20,
        ...rest
    } = props
    return (
        <div
            className='flex items-center justify-start'
        >
            <input
                ref={forwardedRef}
                type="checkbox"
                value={value}
                onChange={onChange}
                className={` mr-3 ${className}`}
                style={{ width: size, height: size, ...style }}
                checked={checked}
                disabled={disabled}
                {...rest}
            />
            {
                title && <span className="">{title}</span>
            }
        </div>
    )
}
