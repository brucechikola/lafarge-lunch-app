import PaginatedTable from 'components/Tables/PaginatedTable'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Locations() {
    const CreateActions = ({ data, type }) => {
        return type === 'edit' ?
            <button className="border-indigo-400 rounded-md flex items-center justify-center">
                <FiEdit className='text-indigo-900 mr-1' size={14} />
                Edit
            </button>
            :
            <button className="border-indigo-400 rounded-md flex items-center justify-center">
                <RiDeleteBin6Line color='red' className='mr-1' size={14} />
                Delete
            </button>
    }
    const Location = ({ title }) => {
        return <div className="flex items-center justify-start">
            <MdLocationPin className="text-indigo-900 text-[18px] mr-2" />
            {title}
        </div>
    }
    const cols = [
        {
            Header: 'Location',
            accessor: 'location'
        },
        {
            Header: 'Province',
            accessor: 'province'
        },
        {
            Header: 'Edit',
            accessor: 'edit'
        },
        {
            Header: 'Delete',
            accessor: 'delete'
        },
    ]
    const data = [
        {
            location: <Location title="DownTown" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            location: <Location title="Chibolya" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            location: <Location title="Comesa Market" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            location: <Location title="Misisi" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            location: <Location title="Kanyama" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            location: <Location title="Intercity bus station" />,
            province: 'Lusaka',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
    ]

    return (
        <div className='w-[90%] items-center justify-ceter'>
            <PaginatedTable columns={cols} data={data} pageSize={3} />
        </div>
    )
}
