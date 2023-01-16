import React from 'react'
import Avata from '../Avata'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import UserDisplay from '../UserDisplay'
export default function MainHeader() {
    return (
        <>
            <div className='header w-full bg-white h-[70px] flex items-center justify-center shadow-md z-10  borderborder-b-1'>
                <div className='w-4/5 h-full flex items-center justify-between'>
                    <div className='flex items-center justify-between'>
                        <Logo style={{ width: 100 }} />
                    </div>
                    <div className='flex h-full items-center justify-center'>
                        <SearchBar />
                        <Avata />
                        <UserDisplay />
                    </div>
                </div>
            </div>

        </>
    )
}
