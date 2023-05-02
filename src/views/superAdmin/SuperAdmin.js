import PaginatedTable from 'components/Tables/PaginatedTable'
import Container from 'components/shared/Container'
import DateField from 'components/shared/DateField'
import PageControlsTab from 'components/shared/PageControlsTab'
import Select from 'components/shared/Select'
import Title from 'components/shared/Title'
import React, { useState } from 'react'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import Locations from './components/Locations'
import CriminalActivityTypes from './components/CriminalActivityTypes'
import CriminalActivities from './components/CriminalActivities'
import NewLocation from './components/NewLocation'
import NewCriminalActivityType from './components/NewCriminalActivityType'

export default function SuperAdmin() {
    const [locState, setLocState] = useState(true)
    const [activityTypeState, setActivityTypeState] = useState(false)
    const [activityListState, setActivityListState] = useState(false)
    return (
        <Container className='flex items-center justify-start flex-col mt-2'>
            <PageControlsTab>
                <div>
                    <Title title="Crime Hotspot Super Admin" className="text-white" />
                    <span className='text-[13px] text-white'>Update the info from here</span>
                </div>

            </PageControlsTab>
            <div className='w-full  mt-4 grid grid-cols-2 gap-x-4'>
                <div className='w-full bg-white shadow-dark rounded-md flex items-center justify-start flex-col min-h-[400px]'>
                    <div className='w-full flex items-center justify-between h-[60px] mt-4 border-b pb-5'>
                        <span className='text-gray-500 font-bold text-sm ml-4'>Crime Locations</span>
                        <button onClick={() => setLocState(!locState)} className='w-[200px] h-[40px] rounded-md bg-indigo-900 text-white mr-5 hover:bg-indigo-800 flex items-center justify-center'>
                            <MdOutlineAddCircleOutline className='mr-2' />
                            Add New Location
                        </button>
                    </div>
                    {
                        !locState ? <Locations /> : <NewLocation />
                    }
                </div>
                <div className='w-full bg-white shadow-dark rounded-md flex items-center justify-start flex-col min-h-[250px]'>
                    <div className='w-full flex items-center justify-between h-[60px] mt-4 border-b pb-5'>
                        <span className='text-gray-500 font-bold text-sm ml-4'>Criminal Activity Types</span>
                        <button onClick={() => setActivityTypeState(!activityTypeState)} className='w-[250px] h-[40px] rounded-md bg-indigo-900 text-white mr-5 hover:bg-indigo-800 flex items-center justify-center'>
                            <MdOutlineAddCircleOutline className='mr-2' />
                            Add Criminal Activity Type
                        </button>
                    </div>
                    {
                        !activityTypeState ? <CriminalActivityTypes /> : <NewCriminalActivityType />
                    }

                </div>
                <div className='w-full bg-white shadow-dark rounded-md flex items-center justify-start flex-col min-h-[400px] col-span-2 mt-5'>
                    <div className='w-full flex items-center justify-between h-[60px] mt-4 border-b pb-5'>
                        <span className='text-gray-500 font-bold text-sm ml-4'>Criminal Activities</span>
                        <div className="flex items-center justify-center">
                            <Select
                                options={[{ value: 'Lusaka', label: 'Lusaka' }]}
                                wrapperClassName='w-[200px]'
                                className="mr-2 h-[40px] bg-white rounded-md w-[200px] border"
                                placeholder="Filter by Location"
                            />
                            <div className="w-[200px] mx-5">
                                <DateField className="h-[40px] w-[100%]" />
                            </div>
                            <button onClick={() => setActivityListState(!activityListState)} className='w-[240px] h-[40px] rounded-md bg-indigo-900 text-white mr-5 hover:bg-indigo-800 flex items-center justify-center'>
                                <MdOutlineAddCircleOutline className='mr-2' />
                                Add Criminal Activity
                            </button>
                        </div>

                    </div>
                    <CriminalActivities />
                </div>

            </div>

        </Container>
    )
}
