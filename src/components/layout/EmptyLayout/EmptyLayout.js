import React from 'react'

export default function EmptyLayout(props) {
    return (
        <div className='w-full h-m-[100vh] bg-blue-500'>
            {props.children}
        </div>
    )
}
