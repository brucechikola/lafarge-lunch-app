import Image from 'components/shared/Image'
import { IMG_PATH } from 'constants'
import React from 'react'

export default function LunchMenu() {
    return (
        <div className='w-full min-h-[250px] bg-white shadow-dark rounded-md flex items-center justify-center flex-col overflow-hidden'>
            <Image path={`${IMG_PATH}nshima.webp`} />
            <div className='w-[95%] my-5 flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-slate-700 text-[14px]'>Nshima with Chicken</h4>
                    <span className='font-semibold text-lafarge text-[12px]'>ZMW 70.00</span>
                </div>
                <button className='bg-lafarge text-white rounded-md border-0 w-[100px] h-[30px] font-bold text-[13px]'>Order</button>
            </div>
        </div>
    )
}
