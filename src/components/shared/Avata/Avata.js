import React from 'react'

export default function Avata(props) {
    return (
        <div className={`w-[45px] h-[45px] bg-indigo-100 rounded-full relative flex items-center justify-center`}>
            <img
                className={`w-[40px] h-[40px] rounded-full object-cover`}
                src={props.path}
                alt='Avt'
            />
        </div>
    )
}
