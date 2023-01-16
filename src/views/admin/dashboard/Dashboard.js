import React from 'react'
import Container from '../../../components/shared/Container/Container'
import PageControlsTab from '../../../components/shared/PageControlsTab'
import Title from '../../../components/shared/Title'
import MoreSummaryInfo from './components/ExpenseSummary/ExpenseSummary'
import Statistics from './components/Statistics'
import SummaryChart from './components/SummaryChart'
import SummaryTable from './components/SummaryTable'
export default function Dashboard() {
    return (
        <Container className='flex items-center justify-start flex-col mt-2'>
            <PageControlsTab>
                <Title title="Dashboard" subTitle="Your dashboard here" />
            </PageControlsTab>
            <Statistics />
            <div className='w-full h-m-[250px] mt-4 grid grid-cols-3 gap-x-4'>
                <SummaryChart />
                <MoreSummaryInfo />
            </div>
            <SummaryTable />

        </Container>
    )
}
