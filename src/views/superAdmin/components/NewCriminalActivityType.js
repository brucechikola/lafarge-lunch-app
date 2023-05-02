import Select from 'components/shared/Select'
import React from 'react'
import provinces from '../../../constants/provinces'
import InputField from 'components/shared/InputField'
export default function NewCriminalActivityType() {
    return (
        <div className='w-[90%] grid grid-cols-2 gap-x-[5px] pb-4'>
            <span className='w-full col-span-2 font-bold my-2 text-gray-600'>Add New Crime Type</span>

            <div className='col-span-2'>
                <InputField
                    labelClassName="text-[14px] text-gray-700 mb-2"
                    placeholder="Crime Type"
                    className="w-full col-span-2 h-[40px]"
                    label="Enter Crime Type"
                />
            </div>
            <div className='col-span-2'>
                <InputField
                    labelClassName="text-[14px] text-gray-700 mb-2"
                    placeholder="Brief Description"
                    className="w-full col-span-2 h-[40px] border h-[60px]"
                    label="Enter Brief Description"
                    type="text"
                />
            </div>
            <button className='flex items-center col-span-2 justify-center bg-indigo-900 hover:bg-indigo-800 text-white h-[40px] rounded-md border-0 mt-8'>Submit</button>
        </div>
    )
}
