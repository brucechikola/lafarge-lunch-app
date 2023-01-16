import React from 'react'
import { IMG_PATH } from '../../constants'

export default function Avata(props) {
    return (
        <div className={`flex items-center justify-center`}>
            <img
                className={`rounded-full object-cover ${props.className}`}
                style={{ width: 45, height: 45, ...props.style }}
                src={`${IMG_PATH}avata1.webp`} />
        </div>
    )
}
