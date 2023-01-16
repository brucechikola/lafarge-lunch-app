import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderLink(props) {
    const navigate = useNavigate()
    const { content } = props
    const onLinkClick = (path) => {
        navigate(path)
    }
    return (
        <div onClick={() => onLinkClick(content.path)} className='cursor-pointer mr-5 text-sm text-gray-600 font-semibold'>
            {content.title}
        </div>
    )
}
