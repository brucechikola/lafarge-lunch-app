import React from 'react'
import BasicTable from 'components/Tables/BasicTable/BasicTable'
import Badge from 'components/shared/Badge'
import { pendingSubscriptions } from 'mock/data'
import Row from 'components/shared/Row'
import Button from 'components/shared/Button'

export default function PendingSubscriptionSummary(props) {
    const cols = [
        {
            Header: 'S/N',
            accessor: 'sn',
        },
        {
            Header: 'TXN',
            accessor: 'txn',
        },
        {
            Header: 'Package',
            accessor: 'package',
        },
        {
            Header: 'Names',
            accessor: 'names',
        },
        {
            Header: 'Network',
            accessor: 'network',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
        },
        {
            Header: 'Approval Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'action',
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

    const newData = pendingSubscriptions.map(employee => {
        const status = employee.status
        employee['active_status'] = <Status status={status} />
        return employee
    })
    return (
        <div className='w-full rounded-md bg-white mt-4 p-2 px-5'>
            <Row justify="between" className="my-5">
                <span className='text-gray-500 font-bold text-sm'>Pending Subscriptions</span>
                <Button className="bg-indigo-800 text-white w-[120px]">View All</Button>
            </Row>
            <BasicTable columns={cols} data={newData} />
        </div>
    )
}
