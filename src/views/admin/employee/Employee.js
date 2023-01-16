import React from 'react'
import Container from '../../../components/shared/Container'
import PageControlsTab from '../../../components/shared/PageControlsTab'
import Title from '../../../components/shared/Title'
import EmployeeTable from './components/EmployeeTable'
import EmployeeController from './components/EmployeeController'
import Button from '../../../components/shared/Button/Button'
import { BsFillPersonPlusFill } from 'react-icons/bs'
export default function Employee() {
    return (
        <Container className='p-0'>
            <PageControlsTab>
                <Title
                    title="Employee Management"
                    subTitle="Manage your emoployee Information here"
                />
                <div className=''>
                    <Button onClick={() => alert()} className="bg-indigo-800 transition ease-in-out text-white hover:bg-indigo-700 text-sm hover:shadow-md ">
                        <BsFillPersonPlusFill className='mr-1' size={23} />
                        Add New Employee
                    </Button>
                </div>
            </PageControlsTab>
            <EmployeeController />
            <div className='w-full p-3 flex items-center justify-start flex-col bg-white rounded-md shadow-default mt-4'>
                <EmployeeTable />
            </div>
        </Container>
    )
}
