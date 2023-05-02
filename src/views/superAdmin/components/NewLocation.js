import Select from 'components/shared/Select'
import React from 'react'
import provinces from '../../../constants/provinces'
import InputField from 'components/shared/InputField'
export default function NewLocation() {
    return (
        <div className='w-[90%] grid grid-cols-2 gap-x-[5px]'>
            <span className='w-full col-span-2 font-bold my-2 text-gray-600'>Add New Location</span>
            <Select
                className="border rounded-md h-[40px]"
                placeholder='Select Province'
                label="Select Province"
                labelClassName="text-[14px] text-gray-700 mb-2"
                wrapperClassName="w-full col-span-2 mb-2"
                options={provinces}
            />
            <InputField
                labelClassName="text-[14px] text-gray-700 mb-2"
                placeholder="Location Title"
                className="w-full col-span-2 h-[40px]"
                label="Enter Location title"
            />
            <button className='flex items-center justify-center bg-indigo-900 hover:bg-indigo-800 text-white h-[40px] rounded-md border-0 mt-8'>Submit</button>
        </div>
    )
}
