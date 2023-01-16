import React from 'react'
import { BsCreditCard2FrontFill, BsCurrencyExchange, BsCurrencyDollar } from 'react-icons/bs'
import { FaBriefcaseMedical, FaMoneyBillAlt } from 'react-icons/fa'
import Badge from '../../../../components/shared/Badge'
export default function DeductionSummary() {
    return (
        <div
            className='w-full flex items-center justify-start flex-col bg-white min-h-[200px] rounded-md shadow-default p-4'
        >
            <span className='text-sm text-gray-500 w-full'>Deduction Summary</span>
            <div className='w-full h-full grid grid-cols-3 gap-x-4'>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-orange-200 w-[50px] h-[50px]" showPill={false}>
                        <FaBriefcaseMedical size={25} class="text-orange-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>NHIMA</small>
                    <h4 className='font-bold text-gray-500'>22,055.99</h4>
                </div>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-orange-200 w-[50px] h-[50px]" showPill={false}>
                        <FaMoneyBillAlt size={25} class="text-orange-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>NAPSA</small>
                    <h4 className='font-bold text-gray-500'>37,055.99</h4>
                </div>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-orange-200 w-[50px] h-[50px]" showPill={false}>
                        <BsCurrencyDollar size={25} class="text-orange-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>PAYE</small>
                    <h4 className='font-bold text-gray-500'>17,055.99</h4>
                </div>
            </div>
        </div>
    )
}
