import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { IsObjectEmpty, Unique } from '../../functions/common'
import authenticatedRoutes from './authenticatedRoutes'
import unauthenticatedRoutes from './unauthenticatedRoutes'
import NotFound from '../../views/notFound'
export default function RouteConfig() {
    const { session } = useSelector(state => state.auth)
    let routeList = []
    if (session.token !== '' && session.signedIn) {
        routeList = authenticatedRoutes
    }
    else {
        routeList = unauthenticatedRoutes
    }
    let root = routeList.filter(route => {
        if (route.isRoot)
            return route
    })[0] || {}
    if (IsObjectEmpty(root)) {
        root = routeList[0]
    }
    return (
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
}
