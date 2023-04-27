import React from 'react'
import { LOGO_PATH } from '../../../constants'
export default function Logo(props) {
    const { className, style, width = 90, ...rest } = props
    return (
        <div>
            <img
                className={`m-0 rounded-md ${className}`}
                style={{ width: width, ...style }}
                src={LOGO_PATH}
                alt='Logo'
                {...rest}
            />
        </div>
    )
}
