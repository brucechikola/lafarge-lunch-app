import React from 'react'
import { Unique } from '../../../functions/common'

export default function Select(props) {
    const { className, style, options, value, onChange } = props
    return (
        <select
            value={value}
            onChange={onChange}
            style={style}
            className={`form-control w-full bg-white min-w-[150px] min-h-[35px] px-3 border border-1 border-gray-200 text-slate-600 rounded-md transition ease-in-out focus:outline-none ${className}`}
        >
            {
                options.length > 0 &&
                options.map(option => <option key={Unique()} value={option.value}>{option.label}</option>)
            }
            {
                options.length === 0 &&
                <options key={Unique()} value="">No options available!</options>
            }

        </select>
    )
}
