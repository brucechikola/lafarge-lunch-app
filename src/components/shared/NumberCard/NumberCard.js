import React from 'react'
import Card from '../Card'

export default function NumberCard(props) {
    const { title,
        subTitle,
        value,
        color,
        className,
        style,
        borderSize = 1,
        showLine = false
    } = props
    return (
        <Card
            style={style}
            className={`border-0 bg-white shadow-default flex items-center justify-center flex-col ${className}`}
        >
            <h1
                className={`text-gray-700 w-[80px] h-[80px] rounded-full border border-${borderSize} border-${color}-600 flex items-center justify-center font-bold mb-2`}>{value}</h1>
            <div className='mt-3'>
                <h4 className="text-gray-700 font-bold">{title}</h4>
            </div>
            <small className=" text-gray-400">{subTitle}</small>
            {
                showLine &&
                <div className={`w-[50%] h-[4px] rounded-md bg-${color}-500 my-3`}></div>
            }

        </Card>
    )
}
