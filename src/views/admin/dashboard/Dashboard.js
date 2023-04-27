import React from 'react'
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
export default function Dashboard() {
    return (
        <Container className='flex items-center justify-start flex-col mt-2'>
            <PageControlsTab>
                <div>
                    <Title title="Crime Hotspot Dashboard" className="text-white" />
                    <span className='text-[13px] text-white'>Get the most updated info about crimes occurred in different areas</span>
                </div>
                <div className="flex items-center justify-center w-[max-content]">
                    <Select className="mr-2 h-[40px] bg-white rounded-md" />
                    <div className="w-[300px]">
                        <DateField className="h-[40px] w-[100%]" />
                    </div>
                </div>
            </PageControlsTab>
            <div className='w-full h-m-[250px] mt-4 grid grid-cols-3 gap-x-4'>
                <SummaryChart />
                <MoreSummaryInfo />
            </div>
            <div className='w-full h-m-[250px] mt-4 grid grid-cols-2 gap-x-4'>
                <div className='w-full bg-white shadow-dark rounded-md'>
                    <span className='text-gray-500 font-bold text-sm ml-4'>Overrall Crimes Summary</span>
                    <MultiAxisChart />
                </div>
                <div className='w-full bg-white shadow-dark rounded-md'>

                </div>
            </div>

        </Container>
    )
}
