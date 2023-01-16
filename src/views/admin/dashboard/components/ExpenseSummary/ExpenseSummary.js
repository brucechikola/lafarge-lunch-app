import React from 'react'
import Expense from './Expense'
import { expenseList } from '../../../../../mock/data'
import { Unique } from '../../../../../functions/common'
export default function MoreSummaryInfo(props) {
    return (
        <div className="w-full h-full bg-white rounded-md shadow-default p-2">
            <div className='text-gray-500 font-bold text-sm mb-4 mt-1 flex items-center justify-between w-full'>
                <span>Expense Summary</span>
                <small className='text-gray-600 text-sm'>View All</small>
            </div>
            <div className='w-full flex -tems-start justify-start mt-3 flex-col px-3'>
                {
                    expenseList.map(expense =>
                        <Expense
                            key={Unique()}
                            title={expense.title}
                            value={expense.value}
                            bg="bg-[#421ABF]"
                        />
                    )

                }
            </div>
        </div>
    )
}
