import React from 'react'
import Header from '../../template/Header'
export default function AdminLayout(props) {
    return (
        <div className='w-full'>
            <Header />
            {props.children}
        </div>
    )
}
