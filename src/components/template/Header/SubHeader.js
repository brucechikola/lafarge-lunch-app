import React from 'react'
import HeaderLink from '../HeaderLink'
import GetRoutes from 'config/routing'
export default function SubHeader() {
    const routeList = GetRoutes()
    return (
        <div className='w-full h-full flex items-center justify-center h-[50px] bg-gray-50 shadow-sm z-5 mt-[0.2px]'>
            <div className='w-4/5 h-full flex items-center justify-start'>
                {routeList.map(route => <HeaderLink key={route.title.toLowerCase()} content={route} />)}
            </div>
        </div>
    )
}
