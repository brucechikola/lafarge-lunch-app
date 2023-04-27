import React from 'react'

export default function Title(props) {
    const { className, wrapperClassName, subClass, style, title, subTitle } = props
    return (
        <div
            className={`flex flex-col ${wrapperClassName}`}
        >
            <h3 className={`font-bold ${className}`} style={style}>{title}</h3>
            {
                subTitle && <span className={`${subClass} text-md`}>{subTitle}</span>
            }
        </div>
    )
}
