import React from 'react'
import authenticatedRoutes from '../../../config/route/authenticatedRoutes'
import HeaderLink from '../HeaderLink/HeaderLink'
export default function SubHeader() {
    return (
        <div className='w-full h-full flex items-center justify-center h-[50px] bg-gray-50 shadow-sm z-5 mt-[0.2px]'>
            <div className='w-4/5 h-full flex items-center justify-start'>
                {authenticatedRoutes.map(route => <HeaderLink key={route.key} content={route} />)}
            </div>
        </div>
    )
}
