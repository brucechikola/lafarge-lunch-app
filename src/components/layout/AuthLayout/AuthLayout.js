import React from 'react'

export default function AuthLayout(props) {
    return (
        <div className='w-full h-[100vh] bg-gray-200'>
            {props.children}
        </div>
    )
}
