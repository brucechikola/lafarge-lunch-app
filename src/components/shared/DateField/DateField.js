import { DatePicker } from 'antd'
import React from 'react'

function DateField(props) {
    return (
        <div className='flex flex-col w-full'>
            {props.label && <span className={props.labelClassName}>{props.label}</span>}
            <DatePicker value={props.vale} id={props.id} onChange={props.onChange} className={props.className} />
        </div>

    )
}

export default DateField