import React from 'react'
import { NumberFormatBase, NumericFormat } from 'react-number-format'
export default function Amount(props) {
    const { value, prefix, suffix, className, style } = props
    return (
        <span className={`font-semibold ${className} flex items-center justify-center`} style={{ width: 'max-content', style }}>
            <NumericFormat
                value={value}
                thousandSeparator
                prefix={prefix}
                suffix={suffix}
                renderText
                // decimalSeparator
                disabled
                className='text-end bg-transparent'
                style={{ maxWidth: '90px' }}
            />
        </span>
    )
}
