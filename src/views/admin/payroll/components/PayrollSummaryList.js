import React, { useEffect, useState } from 'react'
import BasicTable from '../../../../components/Tables/BasicTable/BasicTable'
import { payrollData } from '../../../../mock/data'
import Button from '../../../../components/shared/Button'
export default function PayrollSummaryList() {
    const [data, setData] = useState([])
    useEffect(() => {
        const newData = payrollData.map(payroll => {
            payroll['view'] = <ViewBtn payroll={payroll} />
            return payroll
        })
        setData(newData)
    }, [])
    const cols = [
        {
            Header: 'Year',
            accessor: 'year',
        },
        {
            Header: 'Month',
            accessor: 'month',
        },
        {
            Header: 'Gross',
            accessor: 'gross',
        },
        {
            Header: 'Net',
            accessor: 'net',
        },
        {
            Header: 'Deductions',
            accessor: 'deductions',
        },
        {
            Header: 'View',
            accessor: 'view',
        },

    ]

    const ViewBtn = ({ payroll }) => {
        return (
            <Button className="h-[30px] text-sm">View Payroll</Button>
        )
    }
    console.log(data)
    return (
        <div className='w-full flex items-center justify-start flex-col bg-white min-h-[200px] rounded-md shadow-default p-4 col-span-2'>
            <div className='w-full rounded-md bg-white mt-4 p-2 px-5'>
                <span className='text-gray-500 font-bold text-sm'>Payroll List</span>
                <BasicTable columns={cols} data={data} />
            </div>
        </div>
    )
}
