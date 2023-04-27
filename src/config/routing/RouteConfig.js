import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IsObjectEmpty, Unique } from 'functions/common'
import NotFound from 'views/notFound'
import { FaSadTear } from 'react-icons/fa'
import GetRoutes from '.'
export default function RouteConfig() {
    const routeList = GetRoutes()
    let root = routeList.filter(route => {
        if (route.isRoot)
            return route
    })[0] || {}
    if (IsObjectEmpty(root)) {
        root = routeList[0]
    }
    return routeList && routeList.length > 0 ?
        (
            <Routes>
                <Route path='/' element={root.element} />
                {
                    routeList.map(route =>
                        <Route key={Unique()} path={route.path} element={route.element} />
                    )
                }
                <Route path="*" element={<NotFound />} />
            </Routes>
        )
        :
        (
            <div className='w-full h-[70vh] text-gray-500 flex items-center justify-center flex-col'>
                <FaSadTear size={80} color="indigo" className='mb-4 border rounded-md p-5' />
                <h4>No Routes Provided!</h4>
            </div>
        )

}
