import React from 'react'
import Button from '../../../components/shared/Button'
import Container from '../../../components/shared/Container/Container'
import NumberCard from '../../../components/shared/NumberCard/NumberCard'
import PageControlsTab from '../../../components/shared/PageControlsTab'
import Title from '../../../components/shared/Title'
import DepartmentList from './components/DepartmentList'
import DepartmentSummary from './components/DepartmentSummary'
export default function Department() {
    return (
        <Container className='flex items-center justify-start flex-col mt-2'>
            <PageControlsTab>
                <Title title="Department Management" subTitle="Manage your departments here" />
                <Button className="bg-indigo-800 text-white text-sm ">New Department</Button>
            </PageControlsTab>
            <div className="w-full min-h-[300px] grid grid-cols-3 gap-x-3">
                <div className="w-full min-h-[300px] col-span-2 grid grid-cols-1">
                    <DepartmentSummary />
                    <DepartmentList />
                </div>
                <div className="w-full min-h-[300px] bg-white shadow-default rounded-md">

                </div>
            </div>
        </Container>
    )
}
