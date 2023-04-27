import React from 'react'
import InputField from 'components/shared/InputField'
import { BsSearch } from 'react-icons/bs';
export default function SearchBar(props) {
    return (
        <div className='flex items-center justify-center mr-10 text-gray-400 border border-gray-200 text-sm px-5 rounded-lg py-1'>
            <BsSearch size={20} />
            <InputField
                className=" text-center border-0"
                placeholder="Search Content"
            />
        </div>
    )
}
