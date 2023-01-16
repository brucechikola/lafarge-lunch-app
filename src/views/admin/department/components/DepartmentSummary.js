import React from 'react'
import NumberCard from '../../../../components/shared/NumberCard/NumberCard'

export default function DepartmentSummary() {
    return (
        <div className="w-full min-h-[200px] col-span-2 grid grid-cols-3 rounded-md mb-3 gap-x-3">
            <NumberCard
                title="Total Departments"
                subTitle="10 employees"
                color="indigo"
                value="6"
                borderSize={4}
            />
            <NumberCard
                title="Total Projects"
                subTitle="95% completed"
                color="emerald"
                value={20}
                borderSize={4}
                showLine={true}
            />
            <NumberCard
                title="Total Employees"
                subTitle="22 Active"
                color="orange"
                value={58}
                borderSize={4}
            />
        </div>
    )
}
