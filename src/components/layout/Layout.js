import React from 'react'
import 'css/table.css'
import RouteConfig from 'config/routing/RouteConfig'
import { useSelector } from 'react-redux'
import { LAYOUTS } from 'constants'
import AdminLayout from './AdminLayout'
import AuthLayout from './AuthLayout'
import UserLayout from './UserLayout'
import EmptyLayout from './EmptyLayout'
export default function Layout() {
    const { layout } = useSelector(state => state.layout.layoutSlice)
    const GetLayout = (props) => {
        switch (layout) {
            case LAYOUTS.ADMIN_LAYOUT:
                return <AdminLayout>{props.children}</AdminLayout>
            case LAYOUTS.AUTH_LAYOUT:
                return <AuthLayout>{props.children}</AuthLayout>
            case LAYOUTS.USER_LAYOUT:
                return <UserLayout>{props.children}</UserLayout>
            case LAYOUTS.EMPTY_LAYOUT:
                return <EmptyLayout>{props.children}</EmptyLayout>
            default:
                return <EmptyLayout>{props.children}</EmptyLayout>
        }
    }
    return (
        <div className='prose-base w-full h-full'>
            <GetLayout >
                <RouteConfig />
            </GetLayout>
        </div>
    )
}
