import React, { useState } from 'react'
import Container from 'components/shared/Container/Container'
import PageControlsTab from 'components/shared/PageControlsTab'
import Title from 'components/shared/Title'
import MoreSummaryInfo from './components/MostStreamed/CrimesMap'
import Statistics from './components/Statistics'
import SummaryChart from './components/SummaryChart'
import SummaryTable from './components/PendingSubscriptionSummary'
import MultiAxisChart from 'components/Charts/MultiAxisChart'
import PercentageChart from 'components/Charts/PercentageChart'
import DateField from 'components/shared/DateField'
import Select from 'components/shared/Select'
import LunchMenu from './components/LunchMenu'
import { FiMenu } from 'react-icons/fi'
import { FaIdCard, FaMailBulk, FaPhoneAlt, FaRegMoneyBillAlt, FaUser } from 'react-icons/fa'
import { GiCompanionCube } from 'react-icons/gi'
import PaginatedTable from 'components/Tables/PaginatedTable'
export default function Dashboard() {
    const [pg, setPg] = useState(true)
    const cols = [
        {
            Header: 'S/N',
            accessor: 'sn'
        },
        {
            Header: 'Ordered',
            accessor: 'orddered'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Total Amount',
            accessor: 'amount'
        },
        {
            Header: 'Status',
            accessor: 'status'
        }
    ]
    const data = [
        {
            sn: 1,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 2,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 3,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 4,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 5,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 6,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 7,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 8,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 9,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 10,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 12,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
        {
            sn: 12,
            orddered: 'Chicken and Chips',
            date: '1st April, 2023',
            amount: '70.00',
            status: <span className='text-red-700 rounded-md bg-red-100 p-1 px-3 text-[13px] font-bold'>Unpaid</span>
        },
    ]
    return (
        <Container className='flex items-center justify-start flex-col mt-2'>
            <PageControlsTab className="mt-10">
                <div className="text-slate-800" >
                    <Title title="Here is today's menu" style={{ fontSize: 30 }} />
                    <span className='text-[13px]'>Please select from our today's menus what you would like to have for lunch today</span>
                </div>
                <div className="flex items-center justify-center w-[max-content]">
                    <button onClick={() => setPg(false)} className='w-[200px] h-[40px] bg-lafarge rounded-md text-white flex items-center justify-center mr-2'> <FiMenu className='mr-2' /> Menu</button>
                    <button onClick={() => setPg(true)} className='w-[200px] h-[40px] bg-lafarge rounded-md text-white  flex items-center justify-center'><FaRegMoneyBillAlt className='mr-2' /> My Monthly Bills</button>
                </div>
            </PageControlsTab>
            {
                !pg && (
                    <div className='w-full h-m-[250px] mt-5 grid grid-cols-4 gap-[15px] '>
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                        <LunchMenu />
                    </div>
                )
            }
            {
                pg && (
                    <div className='w-full h-m-[250px] mt-5 grid grid-cols-2 gap-[15px] '>
                        <div className='w-full min-h-[200px] bg-white rounded-md shadow-dark p-4'>
                            <span className='w-full'>Personal info</span>
                            <div className='w-full grid grid-cols-4 gap-3 mt-3 text-[14px]'>
                                <div className='w-full flex items-center justify-start'>
                                    <FaIdCard className='text-[13px] mr-2' />
                                    Employee ID :
                                </div>
                                <span className='w-full text-lafarge'>123456789</span>
                                <div className='w-full flex items-center justify-start'>
                                    <GiCompanionCube className='text-[13px] mr-2' />
                                    Company Name :
                                </div>
                                <span className='w-full text-lafarge'>Lafarge</span>
                                <div className='w-full flex items-center justify-start'>
                                    <FaUser className='text-[13px] mr-2' />
                                    First Name :
                                </div>
                                <span className='w-full text-lafarge'>Example</span>
                                <div className='w-full flex items-center justify-start'>
                                    <FaUser className='text-[13px] mr-2' />
                                    Last Name :
                                </div>
                                <span className='w-full text-lafarge'>Surname</span>
                                <div className='w-full flex items-center justify-start'>
                                    <FaPhoneAlt className='text-[13px] mr-2' />
                                    Contact :
                                </div>
                                <span className='w-full text-lafarge'>260776767676</span>
                                <div className='w-full flex items-center justify-start'>
                                    <FaMailBulk className='text-[13px] mr-2' />
                                    Email Address :
                                </div>
                                <span className='w-full text-lafarge'>exae@example.com</span>
                            </div>
                        </div>
                        <div className='w-full min-h-[200px] bg-white rounded-md shadow-dark grid grid-cols-2 gap-3 p-5'>
                            <span className='w-full col-span-2'>Bill Summary</span>
                            <div className='w-full h-full flex items-center justify-start flex-col'>
                                <span className=' flex items-center justify-center'>
                                    <span className='text-[14px] font-bold mr-3'>ZMW</span>
                                    <h1 className='text-red-500 font-bold'>60.00</h1>
                                </span>
                                <span className='font-bold'>Weekly Lunch Bill</span>
                                <span className='text-[12px] text-lafarge mt-5'>19th May, 2023</span>
                            </div>
                            <div className='w-full h-full flex items-center justify-start flex-col border-l'>
                                <span className=' flex items-center justify-center'>
                                    <span className='text-[14px] font-bold mr-3'>ZMW</span>
                                    <h1 className='text-red-500 font-bold'>770.00</h1>
                                </span>
                                <span className='font-bold'>Monthly Lunch Bill</span>
                                <span className='text-[12px] text-lafarge mt-5'>19th May, 2023</span>
                            </div>
                        </div>
                        <div className='w-full min-h-[400px] bg-white rounded-md shadow-dark p-5 col-span-2'>
                            <span className='w-full col-span-2'>Unpaid Bills</span>
                            <PaginatedTable columns={cols} data={data} />
                        </div>
                    </div>
                )
            }

        </Container>
    )
}
