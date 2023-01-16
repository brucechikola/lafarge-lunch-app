import React from 'react'
import { BsCreditCard2FrontFill, BsCurrencyExchange, BsCurrencyDollar } from 'react-icons/bs'
import Badge from '../../../../components/shared/Badge'
export default function PayoutSummary() {
    return (
        <div
            className='w-full flex items-center justify-start flex-col bg-white min-h-[200px] rounded-md shadow-default p-4'
        >
            <span className='text-sm text-gray-500 w-full'>Jan, 2023 - Earnings Summary</span>
            <div className='w-full h-full grid grid-cols-3 gap-x-4'>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-indigo-200 w-[50px] h-[50px]" showPill={false}>
                        <BsCreditCard2FrontFill size={25} class="text-indigo-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>Gross Pay</small>
                    <h3 className='font-bold text-gray-500'>445,055.99</h3>
                </div>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-indigo-200 w-[50px] h-[50px]" showPill={false}>
                        <BsCurrencyDollar size={25} class="text-indigo-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>Net Pay</small>
                    <h3 className='font-bold text-gray-500'>227,055.99</h3>
                </div>
                <div className='w-full h-full flex items-center justify-center flex-col'>
                    <Badge background="bg-blue-200 w-[50px] h-[50px]" showPill={false}>
                        <BsCurrencyExchange size={25} class="text-blue-900" />
                    </Badge>
                    <small className='my-3 font-semibold'>Allowances</small>
                    <h3 className='font-bold text-gray-500'>45,055.99</h3>
                </div>
            </div>
        </div>
    )
}
