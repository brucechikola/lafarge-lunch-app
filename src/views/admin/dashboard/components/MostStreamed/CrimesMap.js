import PercentageChart from 'components/Charts/PercentageChart'
import React from 'react'
import Crime from './Crime'
import { GiCrimeSceneTape, GiChalkOutlineMurder, GiRun, GiPumpkinMask, GiPistolGun, GiDrippingKnife } from 'react-icons/gi'
export default function CrimesMap(props) {
    return (
        <div className="w-full h-full bg-white rounded-md shadow-default p-2 flex items-center justify-start flex-col">
            <span className='text-gray-500 font-bold text-sm w-[90%]'>Crime Total Summed as at 27th May 2017</span>
            <Crime title="Total Rape Cases" total={10} icon={<GiCrimeSceneTape size={25} color='white' />} />
            <Crime title="Total Murder Cases" total={350} icon={<GiChalkOutlineMurder size={25} color='white' />} />
            <Crime title="Total Snatch Cases" total={100} icon={<GiRun size={25} color='white' />} />
            <Crime title="Total Kidnapping Cases" total={120} icon={<GiPumpkinMask size={25} color='white' />} />
            <Crime title="Total Shooting Cases" total={45} icon={<GiPistolGun size={25} color='white' />} />
            <Crime title="Total Sturbing Cases" total={700} icon={<GiDrippingKnife size={25} color='white' />} />
        </div>
    )
}
