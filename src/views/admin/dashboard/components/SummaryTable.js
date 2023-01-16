import React from 'react'
import BasicTable from '../../../../components/Tables/BasicTable/BasicTable'
import Badge from '../../../../components/shared/Badge'
import { employeeData } from '../../../../mock/data'

export default function SummaryTable(props) {
    const cols = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'First Name',
            accessor: 'first_name',
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Status',
            accessor: 'active_status',
        },
        {
            Header: 'Gender',
            accessor: 'gender',
        },
    ]

    const Status = ({ status }) => {
        const bg = {
            Active: {
                background: 'bg-[#E3DBFB]',
                pill: 'bg-indigo-900'
            },
            'Stand By': {
                background: 'bg-emerald-200',
                pill: 'bg-emerald-900'
            },
            'On Leave': {
                background: 'bg-blue-100',
                pill: 'bg-blue-900'
            },
            Fired: {
                background: 'bg-red-200',
                pill: 'bg-red-900'
            },
        }

        return (
            <Badge
                className={`w-[100px] text-sm`}
                background={bg[status].background} pill={bg[status].pill}>
                {status}
            </Badge>
        )
    }

    const newData = employeeData.map(employee => {
        const status = employee.status
        employee['active_status'] = <Status status={status} />
        return employee
    })
    return (
        <div className='w-full rounded-md bg-white mt-4 p-2 px-5'>
            <span className='text-gray-500 font-bold text-sm'>Summary Table</span>
            <BasicTable columns={cols} data={newData} />
        </div>
    )
}
