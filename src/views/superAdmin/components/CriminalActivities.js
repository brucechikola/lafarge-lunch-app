import PaginatedTable from 'components/Tables/PaginatedTable'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function CriminalActivities() {
    const Delete = ({ data }) => {
        return (
            <button className="border-indigo-400 rounded-md flex items-center justify-center">
                <RiDeleteBin6Line color='red' className='mr-1' size={14} />
                Delete
            </button>
        )
    }
    const cols = [
        // {
        //     Header: 'S/N',
        //     accessor: 'sn'
        // },
        {
            Header: 'Crime Type',
            accessor: 'type'
        },
        {
            Header: 'Location',
            accessor: 'location'
        },
        {
            Header: 'Description',
            accessor: 'desc'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Time',
            accessor: 'time'
        },
        {
            Header: 'Delete',
            accessor: 'delete'
        },
    ]
    const data = [
        {
            sn: 1,
            type: 'Theft',
            location: 'Lusaka',
            desc: 'Thieves stealing stuff from people',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 2,
            type: 'Snatching',
            location: 'Lusaka',
            desc: 'Snatching stuff from people',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 3,
            type: 'Criminal Gangs',
            location: 'Lusaka',
            desc: 'Shooting, sturbing etc',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 4,
            type: 'Selling of Drugs',
            location: 'Lusaka',
            desc: 'Street thugs selling drigs',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 5,
            type: 'Pocket Picking',
            location: 'Lusaka',
            desc: 'Searching people\'s pockets',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 6,
            type: 'Robbery',
            location: 'Lusaka',
            desc: 'Robery activities',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 6,
            type: 'Robbery',
            location: 'Lusaka',
            desc: 'Robery activities',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 6,
            type: 'Robbery',
            location: 'Lusaka',
            desc: 'Robery activities',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
        {
            sn: 6,
            type: 'Robbery',
            location: 'Lusaka',
            desc: 'Robery activities',
            date: '2023-05-31',
            time: '10:00 AM',
            delete: <Delete data={{ id: 1 }} type="delete" />
        },
    ]

    return (
        <div className='w-[90%] items-center justify-ceter'>
            <PaginatedTable columns={cols} data={data} pageSize={5} />
        </div>
    )
}
