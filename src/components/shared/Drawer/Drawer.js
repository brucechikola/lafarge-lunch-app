import React from 'react'

export default function Drawer(props) {
    return (
        <div
            className='w-[40%] min-w-[500px] h-[100vh] fixed top-0 right-0 bg-indigo-700 text-white shadow-darker p-10'
        >
            <div className='w-full h-[60px] flex items-center justify-between'>
                <h3 className="">{props.title}</h3>
                <button className='border-white border-[2px] w-[40px] h-[40px] rounded-full outline-0'>X</button>
            </div>
            {props.children}
        </div>
    )
}
