import React from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card'
import RighSummaryData from './RighSummaryData'
import { BsPlus } from "react-icons/bs"
import { FaUserTie } from "react-icons/fa";
import { BsCalendar2DateFill, BsShareFill, BsArrowLeft } from "react-icons/bs";
import Badge from '../../../../components/shared/Badge'
import PercentageChart from '../../../../components/Charts/PercentageChart'
export default function EmployeeController() {
    return (
        <Card className="my-2  w-full h-m-[300px] p-0 rounded-md border-0 grid grid-cols-3 gap-x-5">
            <div className='col-span-2 bg-white grid grid-cols-2 gap-x-6 shadow-default p-4 rounded-lg'>
                <div className="w-full flex flex-col justify">
                    <div className=' flex flex-col'>
                        <small className="text-gray-500 my-1">Total Employee</small>
                        <h3 className="font-bold my-4">355,534</h3>
                    </div>
                    <div className='flex items-center justify-start border border-gray-100 my-2 rounded-lg p-2 mt-3'>
                        <div className='flex items-center justify-start my-3'>
                            <Badge background="bg-indigo-500 w-[40px] h-[40px] rounded-md" showPill={false}>
                                <h3 className='text-white font-bold text-ls'>12</h3>
                            </Badge>
                            <div className=" text-gray-600 font-semibold ml-3">
                                <h4>Admin Users</h4>
                            </div>
                        </div>
                        <div className='flex items-center justify-start ml-7'>
                            <Badge background="bg-stone-500 w-[40px] h-[40px] rounded-md" showPill={false}>
                                <h3 className='text-white font-bold text-ls'>12</h3>
                            </Badge>
                            <div className=" text-gray-600 font-semibold ml-3">
                                <h4>Normal Users</h4>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 flex items-center justify-between'>
                        <Button onClick={() => alert()} className="border transition ease-in-out text-gray-600 hover:bg-gray-100 text-sm hover:shadow-md w-[150px]">
                            <BsArrowLeft className='mr-1' size={20} />
                            Back
                        </Button>
                        <Button onClick={() => alert()} className="bg-indigo-800 border-0 transition ease-in-out text-white hover:bg-indigo-700 text-sm hover:shadow-md ">
                            <BsPlus className='mr-1' size={20} />
                            Add New Employee
                        </Button>

                    </div>
                </div>
                <div className="w-full">
                    <RighSummaryData bg="bg-blue-800" title="Active" value={444} icon={<FaUserTie size={14} color="white" />} />
                    <RighSummaryData bg="bg-blue-500" title="On Leave" value={18} icon={<BsCalendar2DateFill size={14} color="white" />} />
                    <RighSummaryData bg="bg-indigo-500" title="Interns" value={10} icon={<BsShareFill size={14} color="white" />} />
                    <RighSummaryData bg="bg-slate-400" title="Fired" value={114} icon={<BsCalendar2DateFill size={14} color="white" />} />
                </div>
            </div>
            <div className="w-full bg-white rounded-lg flex items-center justify-center flex-col">
                <span className="text-gray-500 font-bold my-3 text-sm">Percentage Col</span>
                <PercentageChart />
            </div>

        </Card>
    )
}
