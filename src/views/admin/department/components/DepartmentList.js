import React from 'react'
import Card from '../../../../components/shared/Card'
import SubTitle from '../../../../components/shared/SubTitle/SubTitle'
import BasicTable from '../../../../components/Tables/BasicTable'
import { departmentData } from '../../../../mock/data'
export default function DepartmentList() {
    const columns = [
        {
            Header: 'Department',
            accessor: 'department',
        },
        {
            Header: 'Total Employee',
            accessor: 'total_employee',
        },
        {
            Header: 'Total Projects',
            accessor: 'total_projects',
        },
        {
            Header: 'Total Expense',
            accessor: 'total_expense',
        },
        {
            Header: 'total Income',
            accessor: 'total_income',
        },
    ]
    return (
        <Card className="w-full min-h-[300px] col-span-2 flex-col bg-white shadow-default rounded-md border-0">
            <SubTitle title="Departments" className="font-bold text-sm" />
            <BasicTable columns={columns} data={departmentData} />
        </Card>
    )
}
