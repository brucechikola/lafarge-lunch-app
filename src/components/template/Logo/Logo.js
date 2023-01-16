import React from 'react'
import { LOGO_PATH } from '../../../constants'
export default function Logo(props) {
    return (
        <div>
            <img
                className={props.className}
                style={{ width: 70, ...props.style }}
                src={LOGO_PATH}
                alt='Logo'
            />
        </div>
    )
}
