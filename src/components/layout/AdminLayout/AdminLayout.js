import React, { useEffect } from 'react'
import Header from 'components/template/Header'
import { GetToken, GetUser } from 'api/config'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLayout } from 'store/layout/layoutSlice'
import { LAYOUTS } from 'constants'
export default function AdminLayout(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = GetToken()
    const user = GetUser()
    useEffect(() => {
        if (!token || !user) {
            dispatch(setLayout(LAYOUTS.AUTH_LAYOUT))
            navigate('/auth')
        }
    }, [])
    return (
        <div className='w-full'>
            <Header />
            {props.children}
        </div>
    )
}
