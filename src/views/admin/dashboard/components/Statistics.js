import React from 'react'
import Card from 'components/shared/Card/Card'
import { FaUserCircle, FaBriefcase, FaMusic, FaMoneyBill, FaBusinessTime } from 'react-icons/fa';
import { BsArrowUpShort, BsArrowDownShort, BsCalendarCheckFill, BsCheck } from 'react-icons/bs';
export default function Statistics() {
    const Statistic = (props) => {
        const {
            title,
            titleValue,
            subTitle,
            subTitleValue,
            icon,
            bg,
            color,
            grow
        } = props
        return (
            <Card className="bg-white cursor-pointer flex items-center flex-col border-0 shadow-default">
                <div className='w-full flex items-center justify-between'>
                    <div className={`w-[70px] h-[60px] rounded-full m-2 flex items-center justify-center ${bg} ${color}`}>{icon}</div>
                    <div className='w-full flex tems-center justify-between'>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-gray-700 mb-2'>{title}</span>
                            <small className=' text-gray-500'>{subTitle}</small>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span className='mb-2 px-5'>{titleValue}</span>
                            <small className={`font-semibold text-gray-500 px-5 rounded-full text-center bg-blue-50 flex items-center justify-center`}>
                                {
                                    grow ? <BsArrowUpShort size={15} className='text-indigo-400 mr-1 font-bold' /> :
                                        <BsArrowDownShort size={15} className='text-red-400 mr-1 font-bold' />
                                }
                                {subTitleValue}
                            </small>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
    return (
        <div className='w-full grid grid-cols-3 gap-x-5'>
            <Statistic
                title="Total Streams"
                titleValue={48}
                subTitle="Last Month"
                subTitleValue={27}
                icon={<FaMusic size={25} />}
                bg='bg-indigo-100'
                color='text-indigo-800'
                grow={true}
            />
            <Statistic
                title="Total Revenue"
                titleValue={27}
                subTitle="Last month"
                subTitleValue={15}
                icon={<FaMoneyBill size={25} />}
                bg='bg-blue-100'
                color='text-blue-800'
                grow={true}
            />
            <Statistic
                title="Total Pending Subscriptions"
                titleValue={0}
                subTitle="Approved"
                subTitleValue={0}
                icon={<FaBusinessTime size={25} />}
                bg='bg-emerald-100'
                color='text-[#1ABFA9]'
            />
        </div>
    )
}
