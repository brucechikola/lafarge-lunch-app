import React from 'react'

export default function InputField(props) {
    const {
        type,
        placeholder,
        className,
        id,
        showLabel,
    } = props
    return (
        <div className="flex justify-center">
            <div className="">
                {
                    showLabel && <label className="form-label inline-block mb-2 text-gray-700" >Example label</label>
                }

                <input
                    type={type || 'text'}
                    className={`form-control w-full min-w-[150px] min-h-[35px] px-3 border border-1 border-gray-200 rounded-md transition ease-in-out focus:outline-none ${className}`}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        </div >
    )
}


