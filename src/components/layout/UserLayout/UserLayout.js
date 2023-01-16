import React from 'react'

export default function UserLayout(props) {
    return (
        <div className='w-full h-m-[100vh] bg-red-200'>
            {props.children}
        </div>
    )
}
