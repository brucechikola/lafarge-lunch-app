import PaginatedTable from 'components/Tables/PaginatedTable'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { GiGasMask } from 'react-icons/gi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function CriminalActivityTypes() {
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
    const Type = ({ title }) => {
        return <div className="flex items-center justify-start">
            <GiGasMask className="text-red-700 text-[18px] mr-2" />
            {title}
        </div>
    }
    const cols = [
        {
            Header: 'Crime Type',
            accessor: 'type'
        },
        {
            Header: 'Brief Description',
            accessor: 'desc'
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
            type: <Type title="Theft" />,
            desc: 'Thieves stealing stuff from people',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            type: <Type title="Snatching" />,
            desc: 'Snatching stuff from people',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            type: <Type title="Criminal Gangs" />,
            desc: 'Shooting, sturbing etc',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            type: <Type title="Selling of Drugs" />,
            desc: 'Street thugs selling drigs',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            type: <Type title="Pocket Picking" />,
            desc: 'Searching people\'s pockets',
            edit: <CreateActions data={{ id: 1 }} type="edit" />,
            delete: <CreateActions data={{ id: 1 }} type="delete" />
        },
        {
            type: <Type title="Robbery" />,
            desc: 'Robery activities',
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
