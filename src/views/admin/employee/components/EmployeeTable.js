import React, { useEffect, useState } from 'react'
import BasicTable from '../../../../components/Tables/BasicTable/BasicTable'
import Badge from '../../../../components/shared/Badge'
import { employeeData } from '../../../../mock/data'
import Avata from '../../../../components/shared/Avata'
import PageControlsTab from '../../../../components/shared/PageControlsTab'
import InputField from '../../../../components/shared/InputField'
import Button from '../../../../components/shared/Button/Button'
import Select from '../../../../components/shared/Select'
import { Unique } from '../../../../functions/common'
import { BsFillFilterCircleFill } from 'react-icons/bs'
export default function EmployeeTable(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        const newData = employeeData.map(employee => {
            const status = employee.status
            employee['dp'] = <Avata path={employee.avata} />
            employee['active_status'] = <Status status={status} />
            employee['view'] = <ViewBtn employee={employee} />
            return employee
        })
        setData(newData)
    }, [])
    const cols = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Profile',
            accessor: 'dp',
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
        {
            Header: 'View Profile',
            accessor: 'view',
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
        console.log(status)

        return (
            <Badge
                key={Unique()}
                className={`w-[100px] text-sm`}
                background={bg[status].background} pill={bg[status].pill}
            >
                {status}
            </Badge>
        )
    }

    const onViewEmployeeData = (data) => {
        // console.log(data)
    }

    const ViewBtn = (employee) => {
        return <Button onClick={() => onViewEmployeeData(employee)}>View</Button>
    }

    const filterOptions = [
        {
            label: 'Filter Employees',
            value: 'all',
        },
        {
            label: 'Active',
            value: 'active',
        },
        {
            label: 'On Leave',
            value: 'on-leave',
        },
        {
            label: 'Interns',
            value: 'interns',
        },
        {
            label: 'Fired',
            value: 'fired',
        },
    ]
    const onSelectChange = (value) => {
        console.log(value)
    }


    return (
        <div className='w-full p-2 '>
            <PageControlsTab>
                <span className='text-gray-500 font-bold text-sm'>Employee</span>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center mr-5 border px-3 rounded-md text-gray-400 text-sm'>
                        <BsFillFilterCircleFill size={20} />
                        <Select
                            onChange={e => onSelectChange(e.target.value)}
                            options={filterOptions}
                            className="border-0"
                        />
                    </div>
                    <InputField className="w-[200px] text-center text-sm rounded-full h" placeholder="Search Employee" />
                </div>
            </PageControlsTab>
            <BasicTable columns={cols} data={data} />
        </div>
    )
}
